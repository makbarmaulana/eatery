/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { itActsAsFavoriteRestaurantModel } from './contract/FavoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(
      async (Restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(Restaurant.id);
      },
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
