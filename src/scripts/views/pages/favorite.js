import '../components/Main/content-list';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <main id="mainContent" class="main-content">
        <div class="favorite__header">
          <h2>Favorite Restautants</h2>
        </div>

        <content-list class="content-list"></content-list>
      </main>
    `;
  },

  async afterRender() {
    const restaurantsData = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('content-list');

    restaurantsContainer.restaurants = restaurantsData;
  },
};

export default Favorite;
