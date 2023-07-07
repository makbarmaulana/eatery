import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPISource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const { restaurants } = await response.json();
    return restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
    const { restaurant } = await response.json();
    return restaurant;
  }

  static async addReviewRestaurant({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW_RESTAURANT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });

    const { customerReviews } = await response.json();
    return customerReviews;
  }
}

export default RestaurantAPISource;
