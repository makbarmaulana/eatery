class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p class="copyright">
        Copyright &copy; 2023 <span class="author"> M Akbar Maulana</span> - Eatery
      </p>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
