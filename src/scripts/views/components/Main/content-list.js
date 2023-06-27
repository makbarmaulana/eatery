import './content-item';

class ContentList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set datas(datas) {
    this._datas = datas;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._datas?.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('content-item');
      restaurantItemElement.data = restaurant;

      this.appendChild(restaurantItemElement);
    });

    this.classList.add('content-list');
  }
}

customElements.define('content-list', ContentList);
