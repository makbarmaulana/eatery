class HeroSection extends HTMLElement {
  connectedCallback() {
    this.classList.add('hero');
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero__headline">
        <h1>Discover Restaurants in your City</h1>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
