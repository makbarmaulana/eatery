class ReviewItem extends HTMLElement {
  connectedCallback() {
    this.classList.add('review-item');
    this.render();
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    if (!this._review) return;
    const { name, review, date } = this._review;

    this.innerHTML = `
      <h5 class="username">${name}</h5>
      <p class="date">${date}</p>
      <p class="content">"${review}"</p>
    `;
  }
}

customElements.define('review-item', ReviewItem);
