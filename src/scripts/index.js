import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.scss';
import '../styles/responsive.scss';
import './views/components/Header/app-bar';
import './views/components/Footer/footer-bar';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerMenu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#appContainer'),
  skipLink: document.querySelector('#skipLink'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();

  try {
    const { default: swRegister } = await import('./sw-register');
    swRegister();
  } catch (error) {
    console.log('Failed to import sw-register', error);
  }
});
