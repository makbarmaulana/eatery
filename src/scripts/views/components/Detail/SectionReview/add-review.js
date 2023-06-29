class AddReview extends HTMLElement {
  connectedCallback() {
    this.classList.add('add-review');
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="add-review__form" id="addReviewForm">
        <input class="form-name" type="text" placeholder="username..." required />
        <textarea class="form-review" placeholder="your review..." required ></textarea>
        <button type="submit" class="form-submit">ADD REVIEW</button>
      </form>
    `;
  }
}

customElements.define('add-review', AddReview);
