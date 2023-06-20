import 'regenerator-runtime';
import '../styles/style.scss';
import '../styles/responsive.scss';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerMenu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
