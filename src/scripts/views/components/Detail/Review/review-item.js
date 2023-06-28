class ReviewItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    const { name, review, date } = this._review;

    this.innerHTML = `
      <h5 class="username">${name}</h5>
      <p class="date">${date}</p>
      <p class="content">"${review}"</p>
    `;

    this.classList.add('review-item');
  }
}

customElements.define('review-item', ReviewItem);
