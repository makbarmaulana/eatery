import '../components/Hero/hero-section';
import '../components/Main/content-list';
import RestaurantAPISource from '../../data/restaurantapi-source';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>

      <main id="mainContent" class="main-content">
        <div class="main-content__home-header">
          <h2>Explore Restautants</h2>
        </div>

        <content-list></content-list>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAPISource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('content-list');

    restaurantsContainer.datas = restaurants;
  },
};

export default Home;
