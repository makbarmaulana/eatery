import 'regenerator-runtime';
import '../styles/style.scss';
import '../styles/responsive.scss';
import './views/components/Header/app-bar';
import './views/components/Footer/footer-bar';
import App from './views/app';
import swRegister from './sw-register';

const app = new App({
  button: document.querySelector('#hamburgerMenu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#appContainer'),
  skipLink: document.querySelector('#skipLink'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
