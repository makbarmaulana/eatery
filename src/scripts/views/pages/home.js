import '../components/Hero/hero-section';
import '../components/Main/content-list';
import RestaurantAPISource from '../../data/restaurantapi-source';

const Home = {
  async render() {
    return `
      <hero-section class="hero"></hero-section>

      <main id="mainContent" class="main-content">
        <div class="main-content__header">
          <h2>Explore Restautants</h2>
        </div>

        <content-list class="content-list"></content-list>
      </main>
    `;
  },

  async afterRender() {
    const restaurantsData = await RestaurantAPISource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('content-list');

    restaurantsContainer.restaurants = restaurantsData;
  },
};

export default Home;
