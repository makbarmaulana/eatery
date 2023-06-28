import '../components/Detail/content-detail';
import '../components/like-button';
import RestaurantAPISource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import TabBarInitiator from '../../utils/tab-bar-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';
import LoaderIndicator from '../../utils/loader-initiator';

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
    const restaurantContainer = document.querySelector('content-detail');
    LoaderIndicator.init({ container: restaurantContainer });

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantAPISource.getRestaurantDetail(url.id);
      restaurantContainer.data = restaurant;

      TabBarInitiator.init({
        button: document.querySelector('.tab-bar'),
        content: document.querySelector('.tab-content'),
      });

      AddReviewInitiator.init({
        form: document.querySelector('#addReviewForm'),
        restaurantId: restaurant.id,
      });

      LikeButtonInitiator.init({
        button: document.querySelector('#likeButton'),
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
