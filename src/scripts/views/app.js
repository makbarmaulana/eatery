import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import SkipLinkInitiator from '../utils/skip-link-initiator';

class App {
  constructor({
    button, drawer, content, skipLink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipLink = skipLink;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });

    SkipLinkInitiator.init({
      skipLink: this._skipLink,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
