import CONFIG from '../../../globals/config';

class ContentItem extends HTMLElement {
  connectedCallback() {
    this.classList.add('content-item');
    this.render();
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    const {
      id, name, description, pictureId, city, rating,
    } = this._data;

    this.innerHTML = `
        <a href="/#/detail/${id}" aria-label="${name}">
          <div class="thumbnail">
            <img src="${CONFIG.BASE_IMAGE_URL('small', pictureId)}" alt="${name}" loading="lazy">
          </div>

          <div class="detail">
            <h3 class="detail-name">${name}</h3>

            <div class="detail-rating">
            <span class="detail-rating-star" style="--rating: ${rating};"></span>
              <p class="detail-rating-amount">${rating}</p>
            </div>

            <p class="detail-city">${city}</p>
            <p class="detail-description">${description}</p>
          </div>
        </a>
      `;
  }
}

customElements.define('content-item', ContentItem);
