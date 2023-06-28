import '../components/Main/content-list';
import '../components/loader-element';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import LoaderIndicator from '../../utils/loader-initiator';

const Favorite = {
  async render() {
    return `
      <main id="mainContent" class="main-content">
        <div class="main-content__favorite-header">
          <h2>Favorite Restautants</h2>
        </div>

        <content-list></content-list>
      </main>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('content-list');
    LoaderIndicator.init({ container: restaurantsContainer });

    try {
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
      restaurantsContainer.datas = restaurant;
    } catch (error) {
      restaurantsContainer.renderError();
    }

    LoaderIndicator.hide();
  },
};

export default Favorite;
