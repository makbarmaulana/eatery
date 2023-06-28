import RestaurantAPISource from '../data/restaurantapi-source';

const AddReviewInitiator = {
  init({ form, restaurantId }) {
    this.form = form;
    this.restaurantId = restaurantId;

    this.form.addEventListener('submit', this._submitReview.bind(this));
  },

  _submitReview(event) {
    event.preventDefault();

    const nameInput = this.form.querySelector('.form-name');
    const reviewInput = this.form.querySelector('.form-review');
    const name = nameInput.value;
    const review = reviewInput.value;

    if (name.trim() === '' || review.trim() === '') {
      // eslint-disable-next-line no-alert
      alert('Name or Review must be filled');
      return;
    }

    this._addReview(name, review);
  },

  async _addReview(name, review) {
    try {
      const reviews = await RestaurantAPISource.addReviewRestaurant({
        id: this.restaurantId,
        name,
        review,
      });

      this._clearFormInputs();
      this._updateContentReviews(reviews);
    } catch (error) {
      console.log(error.message);
    }
  },

  _clearFormInputs() {
    const nameInput = this.form.querySelector('.form-name');
    const reviewInput = this.form.querySelector('.form-review');
    nameInput.value = '';
    reviewInput.value = '';
  },

  _updateContentReviews(reviews) {
    const contentReviewElement = document.querySelector('content-reviews');
    contentReviewElement.reviews = reviews;
  },
};

export default AddReviewInitiator;
