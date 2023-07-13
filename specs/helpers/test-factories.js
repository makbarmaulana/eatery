/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    button: document.querySelector('#likeButton'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
