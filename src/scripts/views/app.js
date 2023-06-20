import DrawerInitiator from '../utils/drawer-initiator';
import './components/Header/hamburger-menu';
import './components/Header/nav-list';

class App {
  constructor({ button, drawer }) {
    this._button = button;
    this._drawer = drawer;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }
}

export default App;
