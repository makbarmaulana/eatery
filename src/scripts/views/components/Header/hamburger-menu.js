class HamburgerMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button
        class="nav-menu-button"
        type="button"
        id="hamburgerButton"
        aria-label="toggle menu"
        aria-controls="navigationDrawer"
        >
          <span></span>
      </button>
    `;
  }
}

customElements.define('hamburger-menu', HamburgerMenu);
