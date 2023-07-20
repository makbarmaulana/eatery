/* eslint-disable no-undef */
Feature('Render Customer Review');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.content-item', 1);
  I.seeElement('.content-item');

  const firstRestaurant = locate('.content-item a').first();
  I.click(firstRestaurant);
  I.waitForElement('.content-detail', 1);
});

Scenario('Render Content Detail with not found ID', async ({ I }) => {
  I.amOnPage('/#/detail/xxx');

  I.seeElement('.content-detail');
  I.see('Unable to find Content', '.error-message');
});

Scenario('Render Content Detail component', async ({ I }) => {
  I.seeElement('.content-detail');
  I.seeElement('.thumbnail img');
  I.seeElement('.tab-bar');
  I.seeElement('.tab-bar__button[data-id="tab1"]');
  I.seeElement('.tab-bar__button[data-id="tab2"]');
  I.seeElement('.tab-bar__button[data-id="tab3"]');
  I.seeElement('.tab-section');
});

Scenario('Render Section Details component', async ({ I }) => {
  const tabDetails = '.tab-bar__button[data-id="tab1"]';
  I.seeElement(tabDetails);
  I.click(locate(tabDetails));

  I.seeElement('.details');
  I.seeElement('.name');
  I.seeElement('.rating');
  I.seeElement('.rating-star');
  I.seeElement('.rating-amount');
  I.seeElement('.categories');
  I.seeElement('.address');
  I.seeElement('.description');
});

Scenario('Render Section Menus component', async ({ I }) => {
  const tabMenus = '.tab-bar__button[data-id="tab2"]';
  I.seeElement(tabMenus);
  I.click(locate(tabMenus));

  I.seeElement('.menus');
  I.seeElement('.menu');
  I.seeElement('.menu-category__title');
  I.seeElement('.menu-list');
});

Scenario('Render Section Reviews component', async ({ I }) => {
  const tabReviews = '.tab-bar__button[data-id="tab3"]';
  I.seeElement(tabReviews);
  I.click(tabReviews);

  I.seeElement('.add-review');
  I.seeElement('.add-review__form');
  I.seeElement('.form-name');
  I.seeElement('.form-review');
  I.seeElement('.form-submit');

  I.seeElement('.review-amount');
  I.seeElement('.review-list');
});
