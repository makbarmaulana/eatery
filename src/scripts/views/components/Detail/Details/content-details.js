class ContentDetails extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set details(details) {
    this._details = details;
    this.render();
  }

  render() {
    if (!this._details) return;
    const {
      name, rating, categories, address, city, description,
    } = this._details;

    this.innerHTML = `
      <h3 class="name">${name}</h3>

      <div class="rating">
        <span class="rating-star" style="--rating: ${rating};"></span>
        <p class="rating-amount">${rating}</p>
      </div>

      <p class="categories">${categories.map((category) => category.name).join(', ')}</p>
      <p class="address">${address}, ${city}</p>
      <p class="description">${description}</p>
    `;
  }
}

customElements.define('content-details', ContentDetails);
