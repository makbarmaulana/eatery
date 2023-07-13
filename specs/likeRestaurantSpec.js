/**
 * Test Scenario:
  * 1. should show the like button when the restaurant has not been liked before.
  * 2. should not show the unlike button when the restaurant has not been liked before.
  * 3. should be able to like the restaurant.
  * 4. should not add a restaurant again when it is already liked.
  * 5. should not add a restaurant when it has no ID.
 */

/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import '../src/scripts/views/components/Detail/like-button';
import * as TestFactories from './helpers/test-factories';
import { clickEvent } from './helpers/action-helper';

describe('Liking A Restaurant', () => {
  const createLikeButtonContainer = () => {
    document.body.innerHTML = '<like-button></like-button>';
  };

  beforeEach(() => {
    createLikeButtonContainer();
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  /**
   * TODO: Give different aria-label when button is liked
   */
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await clickEvent('#likeButton');

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
  });

  it('should not add a restaurant again when it is already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    await clickEvent('#likeButton');

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
  });

  /**
   * TODO: Fix FavoriteRestaurantsIdb (getRestaurant, putRestaurant) to pass this test
   */
  xit('should not add a restaurant when it has no ID', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    await clickEvent('#likeButton');

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
