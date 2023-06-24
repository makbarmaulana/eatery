import CONFIG from '../../../globals/config';

class ContentDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = '';

    if (!this._restaurant) {
      return;
    }

    const {
      name, description, pictureId, city, address, rating, customerReviews, menus,
    } = this._restaurant;

    this.innerHTML = `
      <div class="thumbnail">
        <img src=${CONFIG.BASE_IMAGE_URL('small', pictureId)} alt=${name} loading="lazy">
      </div>

      <div class="tab-bar">
        <button id="tab-1" class="tab-bar__button active">Detail</button>
        <button id="tab-2" class="tab-bar__button">Menu</button>
        <button id="tab-3" class="tab-bar__button">Reviews (${customerReviews ? customerReviews.length : 0})</button>
      </div>

      <div class="tab-content">
        <div id="tab-1" class="tab-content__item detail active">
          <h3 class="detail-name">${name}</h3>
          <div class="detail-rating">
            <span class="detail-rating-star" style="--rating: ${rating};"></span>
            <p class="detail-rating-amount">${rating}</p>
          </div>
          <p class="detail-address">${address}, ${city}</p>
          <p class="detail-description">${description}</p>
        </div>

        <div id="tab-2" class="tab-content__item menus">
          ${ContentDetail._renderMenus(menus.foods, 'foods')}
          ${ContentDetail._renderMenus(menus.drinks, 'drinks')}
        </div>

        <div id="tab-3" class="tab-content__item reviews">
          ${ContentDetail._renderReviews(customerReviews)}
        </div>
      </div>
    `;

    this.classList.add('content-detail');
  }

  static _renderMenus(menus, category) {
    if (!menus || menus.length === 0) {
      return '<p>No menu available</p>';
    }

    const menuHTML = `
      <div class="menu-category">
        <h4 class="menu-category__title">${category}</h4>
        <ul class="menu-list">
          ${menus.map((menuItem) => `
            <li>${menuItem.name}</li>
          `).join('')}
        </ul>
      </div>
    `;

    return menuHTML;
  }

  static _renderReviews(reviews) {
    if (!reviews || reviews.length === 0) {
      return '<p>No reviews available</p>';
    }

    const reviewsHTML = reviews.map((review) => `
      <div class="review">
        <h5 class="review-username">${review.name}</h5>
        <p class="review-date">${review.date}</p>
        <p class="review-content">"${review.review}"</p>
      </div>
    `).join('');

    return reviewsHTML;
  }
}

customElements.define('content-detail', ContentDetail);
