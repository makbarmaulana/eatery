class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero__headline">
        <h2 tabindex="0">Discover Restaurants in your City</h2>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
