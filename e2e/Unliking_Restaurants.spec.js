/* eslint-disable no-undef */
Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.content-item', 1);
  I.seeElement('.content-item');

  I.click(locate('.content-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
});

Scenario('unliking one movie', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.content-item');

  I.click(locate('.content-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('No Content Found', '.error-message');
});
