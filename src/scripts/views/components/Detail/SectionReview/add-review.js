class AddReview extends HTMLElement {
  connectedCallback() {
    this.classList.add('add-review');
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="add-review__form" id="addReviewForm">
        <input class="form-name" type="text" placeholder="Username" required />
        <textarea class="form-review" placeholder="Review description..." required ></textarea>
        <button type="submit" class="form-submit">SUBMIT</button>
      </form>
    `;
  }
}

customElements.define('add-review', AddReview);
