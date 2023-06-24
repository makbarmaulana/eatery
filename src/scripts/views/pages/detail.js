import '../components/Detail/content-detail';
import RestaurantAPISource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import TabBarInitiator from '../../utils/tab-bar-initiator';

const Detail = {
  async render() {
    return `
      <main id="mainContent" class="main-content">
        <content-detail></content-detail>
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
  },
};

export default Detail;
