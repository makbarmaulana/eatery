import CONFIG from '../../../globals/config';
import './Review/content-reviews';
import './Menus/content-menus';

class ContentDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    if (!this._data) {
      return;
    }

    const {
      name, categories, description, pictureId, city, address, rating, customerReviews, menus,
    } = this._data;

    this.innerHTML = `
      <div class="thumbnail">
        <img src="${CONFIG.BASE_IMAGE_URL('small', pictureId)}" alt="${name}" loading="lazy">
      </div>

      <div class="tab-bar">
        <button type="button" id="tab-1" tabindex="0" class="tab-bar__button">Detail</button>
        <button type="button" id="tab-2" tabindex="0" class="tab-bar__button active">Menu</button>
        <button type="button" id="tab-3" tabindex="0" class="tab-bar__button">Reviews</button>
      </div>

      <section class="tab-content">
        <article id="tab-1" class="tab-content__item detail">
          <h3 class="name">${name}</h3>

          <div class="rating">
            <span class="rating-star" style="--rating: ${rating};"></span>
            <p class="rating-amount">${rating}</p>
          </div>

          <p class="categories">${categories.map((category) => category.name).join(', ')}</p>
          <p class="address">${address}, ${city}</p>
          <p class="description">${description}</p>
        </article>

        <content-menus id="tab-2" class="tab-content__item menus active"></content-menus>
        <content-reviews id="tab-3" class="tab-content__item reviews"></content-reviews>
      </section>
    `;

    this.classList.add('content-detail');

    const contentMenusElement = document.querySelector('content-menus');
    contentMenusElement.menus = menus;

    const contentReviewsElement = document.querySelector('content-reviews');
    contentReviewsElement.reviews = customerReviews;
  }
}

customElements.define('content-detail', ContentDetail);
