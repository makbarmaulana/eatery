/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    button: document.querySelector('#likeButton'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
