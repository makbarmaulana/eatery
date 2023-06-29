/* eslint-disable no-alert */
import RestaurantAPISource from '../data/restaurantapi-source';

const AddReviewInitiator = {
  init({ form, restaurantId }) {
    this._form = form;
    this._restaurantId = restaurantId;

    this._form.addEventListener('submit', this._submitReview.bind(this));
  },

  _submitReview(event) {
    event.preventDefault();

    const nameInput = this._form.querySelector('.form-name');
    const reviewInput = this._form.querySelector('.form-review');
    const name = nameInput.value;
    const review = reviewInput.value;

    this._addReview(name, review);
  },

  async _addReview(name, review) {
    try {
      const reviews = await RestaurantAPISource.addReviewRestaurant({
        id: this._restaurantId,
        name,
        review,
      });

      this._clearFormInputs();
      this._updateContentReviews(reviews);
    } catch (error) {
      alert(error.message);
      console.error(error.message);
    }
  },

  _clearFormInputs() {
    const nameInput = this._form.querySelector('.form-name');
    const reviewInput = this._form.querySelector('.form-review');
    nameInput.value = '';
    reviewInput.value = '';
  },

  _updateContentReviews(reviews) {
    const contentReviewElement = document.querySelector('section-reviews');
    contentReviewElement.reviews = reviews;
  },
};

export default AddReviewInitiator;
