/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.content-list');
  I.see('No Content Found', '.error-message');
});

Scenario('liking one movie', async ({ I }) => {
  I.see('No Content Found', '.error-message');

  I.amOnPage('/');

  I.waitForElement('.content-item', 1);
  I.seeElement('.content-item');

  const firstRestaurant = locate('.content-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom('.detail-name');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.content-item');
  const likedRestaurantTitle = await I.grabTextFrom('.detail-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
