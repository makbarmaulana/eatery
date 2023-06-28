import '../components/Hero/hero-section';
import '../components/Main/content-list';
import '../components/loader-element';
import RestaurantAPISource from '../../data/restaurantapi-source';
import LoaderIndicator from '../../utils/loader-initiator';

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
    const restaurantsContainer = document.querySelector('content-list');
    LoaderIndicator.init({ container: restaurantsContainer });

    try {
      const restaurants = await RestaurantAPISource.getAllRestaurants();
      restaurantsContainer.datas = restaurants;
    } catch (error) {
      restaurantsContainer.renderError();
    }

    LoaderIndicator.hide();
  },
};

export default Home;
