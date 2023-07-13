class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button aria-label="like this restaurant" id="likeButton" class="like-button">
        <i class="fa fa-heart-o"></i>
      </button>
    `;
  }
}

customElements.define('like-button', LikeButton);
