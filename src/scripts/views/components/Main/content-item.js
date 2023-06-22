import CONFIG from '../../../globals/config';

class ContentItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      id, name, description, pictureId, city, rating,
    } = this._restaurant;
    const restaurantPath = `/#/detail/${id}`;

    this.innerHTML = `
      <div class="content-item__thumbnail">
        <a href=${restaurantPath}>
          <img src=${CONFIG.BASE_IMAGE_URL('small', pictureId)} alt=${name} loading="lazy">
        </a>
      </div>
      <div class="content-item__detail">
        <h3 class="content-item__detail-name">
          <a href=${restaurantPath}>${name}</a>
        </h3>
        <div class="content-item__detail-rating">
          <span class="content-item__detail-rating-star" style="--rating: ${rating};"></span>
          <p class="content-item__detail-rating-amount">${rating}</p>
        </div>
        <p class="content-item__detail-description">${description}</p>
        <p class="content-item__detail-city">${city}</p>
        `;

    this.classList.add('content-item');
  }
}

customElements.define('content-item', ContentItem);
