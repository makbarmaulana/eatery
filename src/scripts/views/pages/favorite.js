import '../components/Main/content-list';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

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
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('content-list');

    restaurantsContainer.datas = restaurant;
  },
};

export default Favorite;
