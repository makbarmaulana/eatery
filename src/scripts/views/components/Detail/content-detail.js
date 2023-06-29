import CONFIG from '../../../globals/config';
import './SectionDetails/section-details';
import './SectionMenus/section-menus';
import './SectionReview/section-reviews';

class ContentDetail extends HTMLElement {
  connectedCallback() {
    this.classList.add('content-detail');
    this.render();
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  renderError() {
    this.innerHTML = '<h2 class="error-message">Unable to find Content</h2>';
  }

  render() {
    if (!this._data) return;

    const {
      name, pictureId, menus, customerReviews,
    } = this._data;

    this.innerHTML = `
      <div class="thumbnail">
        <img src="${CONFIG.BASE_IMAGE_URL('small', pictureId)}" alt="${name}" loading="lazy">
      </div>

      <div class="tab-bar">
        <button type="button" data-id="tab1" tabindex="0" class="tab-bar__button active">Detail</button>
        <button type="button" data-id="tab2" tabindex="0" class="tab-bar__button">Menu</button>
        <button type="button" data-id="tab3" tabindex="0" class="tab-bar__button">Reviews</button>
      </div>

      <section class="tab-section">
        <section-details id="tab1" class="tab-section__item details active"></section-details>
        <section-menus id="tab2" class="tab-section__item menus"></section-menus>
        <section-reviews id="tab3" class="tab-section__item reviews"></section-reviews>
      </section>
    `;

    const contentDetailsElement = document.querySelector('section-details');
    contentDetailsElement.details = this._data;

    const contentMenusElement = document.querySelector('section-menus');
    contentMenusElement.menus = menus;

    const contentReviewsElement = document.querySelector('section-reviews');
    contentReviewsElement.reviews = customerReviews;
  }
}

customElements.define('content-detail', ContentDetail);
