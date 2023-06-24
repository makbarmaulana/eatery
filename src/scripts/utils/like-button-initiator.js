import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const LikeButtonInitiator = {
  async init({ button, restaurant }) {
    this._button = button;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    const isRestaurantExist = await this._isRestaurantExist(id);

    if (isRestaurantExist) {
      this._renderLiked(id);
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._updateHeartIconClasses('fa-heart-o', 'fa-heart');

    this._button.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked(id) {
    this._updateHeartIconClasses('fa-heart', 'fa-heart-o');

    this._button.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(id);
      this._renderButton();
    });
  },

  _updateHeartIconClasses(add, remove) {
    const heartIcon = this._button.querySelector('i.fa');
    heartIcon.classList.remove(remove);
    heartIcon.classList.add(add);
  },
};

export default LikeButtonInitiator;
