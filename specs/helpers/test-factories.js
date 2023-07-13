/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    button: document.querySelector('#likeButton'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
