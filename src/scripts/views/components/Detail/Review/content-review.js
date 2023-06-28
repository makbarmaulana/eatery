import './add-review';
import './review-item';

class ContentReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = `
      <add-review></add-review>
      <h4 class="review-amount">(${this._reviews ? this._reviews.length : 0}) Reviews</h4>
      <div class="review-list"></div>
    `;

    const reviewListElement = document.querySelector('.review-list');
    this._reviews?.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;

      reviewListElement.appendChild(reviewItemElement);
    });
  }
}

customElements.define('content-review', ContentReview);
