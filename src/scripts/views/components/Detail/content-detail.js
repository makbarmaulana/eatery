import CONFIG from '../../../globals/config';

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
        <button type="button" id="tab-1" tabindex="0" class="tab-bar__button active">Detail</button>
        <button type="button" id="tab-2" tabindex="0" class="tab-bar__button">Menu</button>
        <button type="button" id="tab-3" tabindex="0" class="tab-bar__button">Reviews</button>
      </div>

      <section class="tab-content">
        <article id="tab-1" class="tab-content__item detail active">
          <h3 class="name">${name}</h3>

          <div class="rating">
          <span class="rating-star" style="--rating: ${rating};"></span>
          <p class="rating-amount">${rating}</p>
        </div>

          <p class="categories">${ContentDetail._renderCategories(categories)}</p>
          <p class="address">${address}, ${city}</p>
          <p class="description">${description}</p>
        </article>

        <article id="tab-2" class="tab-content__item menus">
          ${ContentDetail._renderMenus(menus.foods, 'foods')}
          ${ContentDetail._renderMenus(menus.drinks, 'drinks')}
        </article>

        <article id="tab-3" class="tab-content__item reviews">
          <h4 class="review-amount">(${customerReviews ? customerReviews.length : 0}) Reviews</h4>
          ${ContentDetail._renderReviews(customerReviews)}
        </article>
      </section>
    `;

    this.classList.add('content-detail');
  }

  static _renderCategories(categories) {
    return categories.map((category) => category.name).join(', ');
  }

  static _renderMenus(menus, category) {
    if (!menus || menus.length === 0) {
      return '<p>No menus available</p>';
    }

    const menuHTML = `
      <div class="menu-category">
        <h4 class="menu-category__title">${category}</h4>
        <ul class="menu-list">
          ${menus.map((menuItem) => `
            <li class="menu-item">- ${menuItem.name}</li>
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
        <h5 class="username">${review.name}</h5>
        <p class="date">${review.date}</p>
        <p class="content">"${review.review}"</p>
      </div>
    `).join('');

    return reviewsHTML;
  }
}

customElements.define('content-detail', ContentDetail);
