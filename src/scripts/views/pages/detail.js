import '../components/Detail/content-detail';
import '../components/Detail/like-button';
import RestaurantAPISource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import TabBarInitiator from '../../utils/tab-bar-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import AddReviewInitiator from '../../utils/add-review-initiator';
import LoaderIndicator from '../../utils/loader-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <main id="mainContent" class="main-content">
        <content-detail></content-detail>
        <like-button></like-button>
      </main>
    `;
  },

  async afterRender() {
    // lazy load font awesome
    let scriptElement = document.querySelector('script[src="https://use.fontawesome.com/b070c8f1df.js"]');

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.src = 'https://use.fontawesome.com/b070c8f1df.js';
      document.body.appendChild(scriptElement);
    }

    const restaurantContainer = document.querySelector('content-detail');
    LoaderIndicator.init({ container: restaurantContainer });

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantAPISource.getRestaurantDetail(url.id);
      restaurantContainer.data = restaurant;

      TabBarInitiator.init({
        button: document.querySelector('.tab-bar'),
        content: document.querySelector('.tab-section'),
      });

      AddReviewInitiator.init({
        form: document.querySelector('#addReviewForm'),
        restaurantId: restaurant.id,
      });

      LikeButtonPresenter.init({
        button: document.querySelector('#likeButton'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          categories: restaurant.categories,
          city: restaurant.city,
          address: restaurant.address,
          rating: restaurant.rating,
          reviews: restaurant.customerReviews,
          menus: restaurant.menus,
        },
      });
    } catch (error) {
      restaurantContainer.renderError();
    }

    LoaderIndicator.hide();
  },
};

export default Detail;
