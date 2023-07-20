class HeroSection extends HTMLElement {
  connectedCallback() {
    this.classList.add('hero');
    this.render();
    this.setupParallaxEffect();
  }

  render() {
    this.innerHTML = `
      <div class="hero__background">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg" type="image/jpeg">
          <img src='./images/hero-image-large.jpg' alt="hero-image">
        </picture>
      </div>
      <div class="hero__headline">
        <h1>Discover Restaurants in your City</h1>
      </div>
    `;
  }

  setupParallaxEffect() {
    const heroBackground = this.querySelector('.hero__background');
    const heroImg = heroBackground.querySelector('img');

    const parallaxScroll = () => {
      const offset = window.pageYOffset;
      heroImg.style.transform = `translate3d(0, ${offset * 0.4}px, 0)`;
    };

    window.addEventListener('scroll', parallaxScroll);
  }
}

customElements.define('hero-section', HeroSection);
