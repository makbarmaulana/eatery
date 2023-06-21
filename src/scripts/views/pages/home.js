import '../components/Hero/hero-section';

const Home = {
  async render() {
    return `
      <hero-section class="hero"></hero-section>
      <main id="mainContent" class="main-content">
        <h2>Home page</h2>
      </main>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {},
};

export default Home;
