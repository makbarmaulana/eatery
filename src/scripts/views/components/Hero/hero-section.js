class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero__headline">
        <h1>Discover Restaurants in your City</h1>
      </div>
    `;

    this.classList.add('hero');
  }
}

customElements.define('hero-section', HeroSection);
