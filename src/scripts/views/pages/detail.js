import '../components/Detail/content-detail';
import '../components/like-button';
import RestaurantAPISource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import TabBarInitiator from '../../utils/tab-bar-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantAPISource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('content-detail');

    restaurantContainer.restaurant = restaurantData;

    TabBarInitiator.init({
      button: document.querySelector('.tab-bar'),
      content: document.querySelector('.tab-content'),
    });

    LikeButtonInitiator.init({
      button: document.querySelector('#likeButton'),
      restaurant: {
        id: restaurantData.id,
        name: restaurantData.name,
        description: restaurantData.description,
        pictureId: restaurantData.pictureId,
        categories: restaurantData.categories,
        city: restaurantData.city,
        address: restaurantData.address,
        rating: restaurantData.rating,
        reviews: restaurantData.customerReviews,
        menus: restaurantData.menus,
      },
    });
  },
};

export default Detail;
