import CONFIG from '../../../globals/config';
import './Details/content-details';
import './Menus/content-menus';
import './Review/content-reviews';

class ContentDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._data = data;
    this.render();
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

      <section class="tab-content">
        <content-details id="tab1" class="tab-content__item details active"></content-details>
        <content-menus id="tab2" class="tab-content__item menus"></content-menus>
        <content-reviews id="tab3" class="tab-content__item reviews"></content-reviews>
      </section>
    `;

    this.classList.add('content-detail');

    const contentDetailsElement = document.querySelector('content-details');
    contentDetailsElement.details = this._data;

    const contentMenusElement = document.querySelector('content-menus');
    contentMenusElement.menus = menus;

    const contentReviewsElement = document.querySelector('content-reviews');
    contentReviewsElement.reviews = customerReviews;
  }
}

customElements.define('content-detail', ContentDetail);
