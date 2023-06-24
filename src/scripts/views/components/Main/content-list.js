import './content-item';

class ContentList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants?.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('content-item');
      restaurantItemElement.setAttribute('tabindex', '0');
      restaurantItemElement.restaurant = restaurant;

      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('content-list', ContentList);
