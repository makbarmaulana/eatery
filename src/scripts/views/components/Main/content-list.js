import './content-item';

class ContentList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set datas(datas) {
    this._datas = datas;
    this.render();
  }

  renderError() {
    this.innerHTML = '<h2 class="error-message">Failed to Fetch Data! <br/> Please Check Your Internet Connection</h2>';
  }

  render() {
    if (!this._datas || this._datas.length === 0) {
      this.innerHTML = '<h2 class="error-message">No Content Found</h2>';
      this.classList.add('content-list');
      return;
    }

    this.innerHTML = '';
    this._datas.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('content-item');
      restaurantItemElement.data = restaurant;

      this.appendChild(restaurantItemElement);
    });

    this.classList.add('content-list');
  }
}

customElements.define('content-list', ContentList);
