import './hamburger-menu';
import './nav-list';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-bar__brand">
        <img src="./eatery-white.png" alt="Eatery Logo">
      </div>

      <nav id="navigationDrawer" class="app-bar__nav">
        <hamburger-menu id="hamburgerMenu" class="nav-menu"></hamburger-menu>
        <nav-list class="nav-list" aria-labelledby="navigationDrawer"></nav-list>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
