import RestaurantAPISource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <main id="mainContent" class="main-content">
        <h2>Detail page</h2>
      </main>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAPISource.getRestaurantDetail(url.id);
    console.log(restaurant);
  },
};

export default Detail;
