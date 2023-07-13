/**
 * Test Scenario:
  * 1. should display unlike widget when the restaurant has been liked.
  * 2. should not display like widget when the restaurant has been liked.
  * 3. should be able to remove liked restaurant from the list.
  * 4. should not throw error if the unliked restaurant is not in the list.
 */

/* eslint-disable no-undef */
import * as TestFactories from './helpers/test-factories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { clickEvent } from './helpers/action-helper';

describe('Unliking A Restaurant', () => {
  const createLikeButtonContainer = () => {
    document.body.innerHTML = '<like-button></like-button>';
  };

  beforeEach(async () => {
    createLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  /**
   * TODO: Fix aria-label in like button
   */
  xit('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  xit('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await clickEvent('#likeButton');

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    await clickEvent('#likeButton');

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
