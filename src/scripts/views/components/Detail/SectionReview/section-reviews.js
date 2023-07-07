import './add-review';
import './review-item';

class SectionReviews extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    const reviews = this._reviews;

    this.innerHTML = `
      <add-review></add-review>
      <h4 class="review-amount">(${reviews ? reviews.length : 0}) Reviews</h4>
      <div class="review-list"></div>
    `;

    const reviewListElement = document.querySelector('.review-list');

    if (reviews && reviews.length > 0) {
      reviews?.forEach((review) => {
        const reviewItemElement = document.createElement('review-item');
        reviewItemElement.review = review;
        reviewListElement.appendChild(reviewItemElement);
      });
    } else {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.textContent = 'No Reviews Found';
      reviewListElement.appendChild(reviewItemElement);
    }
  }
}

customElements.define('section-reviews', SectionReviews);
