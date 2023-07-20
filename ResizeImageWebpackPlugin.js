const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];

class ResizeImageWebpackPlugin {
  constructor(options = {}) {
    const { source, output, resizeOptions = [] } = options;

    this.source = path.resolve(__dirname, source);
    this.output = path.resolve(__dirname, output);
    this.resizeOptions = resizeOptions;
  }

  async apply(compiler) {
    compiler.hooks.afterEmit.tapPromise('ResizeImageWebpackPlugin', async () => {
      await this._makeDirectory();

      const images = await fs.readdir(this.source);
      await Promise.all(images.map((image) => this.processImage(image)));
    });
  }

  async _makeDirectory() {
    try {
      await fs.mkdir(this.output, { recursive: true });
    } catch (error) {
      console.log(chalk.red.bold('Failed to create output directory:'), error);
    }
  }

  async processImage(image) {
    await Promise.all(
      this.resizeOptions.map(({ size, suffix }) => this.resizeImage({ image, size, suffix })),
    );
  }

  async resizeImage({ image, size, suffix }) {
    const extension = path.extname(image).toLowerCase();
    const basename = path.basename(image).slice(0, -extension.length);
    const filename = `${basename}${suffix ? `-${suffix}` : `-${size}`}${extension}`;
    const outputPath = path.resolve(this.output, filename);

    if (!SUPPORTED_EXTENSIONS.includes(extension)) {
      console.log(`${chalk.red.bold('[ERROR]')} Failed to resize image. Extension ${chalk.green.bold(extension)} not supported.`);
      return;
    }

    try {
      const imageOriginalSize = await this.getImageSize(image);
      await sharp(path.resolve(this.source, image))
        .resize(size)
        .toFile(outputPath);

      const imageOutputSize = await this.getImageSize(outputPath);
      console.log(`asset ${chalk.green.bold(filename)} (${size}) ${imageOutputSize} ${chalk.green.bold('[resized]')} from ${imageOriginalSize}`);
    } catch (error) {
      console.log(chalk.red.bold('Error occurred while resizing image:'), error);
      throw error;
    }
  }

  async getImageSize(image) {
    try {
      const stats = await fs.stat(path.resolve(this.source, image));
      const sizeInKB = (stats.size / 1024).toFixed(2);
      return `${sizeInKB} KiB`;
    } catch (error) {
      console.log(chalk.red.bold('Error occurred while getting image size:'), error);
      return 'Unknown Size';
    }
  }
}

module.exports = ResizeImageWebpackPlugin;
