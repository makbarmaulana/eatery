/* eslint-disable no-plusplus */
class LoaderElement extends HTMLElement {
  connectedCallback() {
    this.classList.add('loader');
    this.render();
  }

  render() {
    const totalDiv = 12;

    for (let i = 1; i <= totalDiv; i++) {
      const div = document.createElement('div');
      this.appendChild(div);
    }
  }
}

customElements.define('loader-element', LoaderElement);
