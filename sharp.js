const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

const resizeImage = (image, size, suffix) => {
  const [imageName, extension] = image.split('.');
  const outputPath = path.resolve(destination, `${imageName}-${suffix}.${extension}`);

  sharp(path.resolve(target, image))
    .resize(size)
    .toFile(outputPath);
};

fs.readdirSync(target).forEach((image) => {
  resizeImage(image, 800, 'large');
  resizeImage(image, 480, 'small');
});
