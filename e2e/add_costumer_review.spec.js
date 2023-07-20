/* eslint-disable no-undef */
const assert = require('assert');

Feature('Add Costumer Review');

Before(({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.content-item', 1);
  I.seeElement('.content-item');

  I.click(locate('.content-item a').first());
  I.waitForElement('.content-detail', 1);

  const tabReviews = '.tab-bar__button[data-id="tab3"]';
  I.seeElement(tabReviews);
  I.click(tabReviews);
});

Scenario('Add a new customer review with empty username', async ({ I }) => {
  I.seeElement('.add-review');

  const initialReviewCount = await I.grabNumberOfVisibleElements('.review-item');

  const reviewText = 'Great restaurant!';

  I.fillField('.form-review', reviewText);
  I.click('.form-submit');

  I.waitForElement('.review-item', 3);

  const currentReviewCount = await I.grabNumberOfVisibleElements('.review-item');
  assert.strictEqual(currentReviewCount, initialReviewCount);
});

Scenario('Add a new customer review with empty content', async ({ I }) => {
  I.seeElement('.add-review');

  const initialReviewCount = await I.grabNumberOfVisibleElements('.review-item');

  const username = 'JohnDoe';

  I.fillField('.form-name', username);
  I.click('.form-submit');

  I.waitForElement('.review-item', 3);

  const currentReviewCount = await I.grabNumberOfVisibleElements('.review-item');
  assert.strictEqual(currentReviewCount, initialReviewCount);
});

Scenario('Add a new customer review with valid username and content', async ({ I }) => {
  I.seeElement('.add-review');

  const initialReviewCount = await I.grabNumberOfVisibleElements('.review-item');

  const username = 'JohnDoe';
  const reviewText = 'Great restaurant!';

  I.fillField('.form-name', username);
  I.fillField('.form-review', reviewText);
  I.click('.form-submit');

  I.waitForElement('.review-item', 3);

  I.see(username, '.username');
  I.see(reviewText, '.content');

  const currentReviewCount = await I.grabNumberOfVisibleElements('.review-item');
  const expectedReviewCount = initialReviewCount + 1;
  assert.strictEqual(currentReviewCount, expectedReviewCount);
});
