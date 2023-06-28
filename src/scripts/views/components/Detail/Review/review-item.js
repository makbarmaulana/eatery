class ReviewItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h5 class="username">${this._review?.name}</h5>
      <p class="date">${this._review?.date}</p>
      <p class="content">"${this._review?.review}"</p>
    `;

    this.classList.add('review-item');
  }
}

customElements.define('review-item', ReviewItem);
