import './add-review';
import './review-item';

class ContentReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    if (!this._reviews) return;
    const reviews = this._reviews;

    this.innerHTML = `
      <add-review></add-review>
      <h4 class="review-amount">(${reviews ? reviews.length : 0}) Reviews</h4>
      <div class="review-list"></div>
    `;

    const reviewListElement = document.querySelector('.review-list');
    reviews?.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;

      reviewListElement.appendChild(reviewItemElement);
    });
  }
}

customElements.define('content-reviews', ContentReviews);
