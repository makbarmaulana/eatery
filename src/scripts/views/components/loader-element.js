/* eslint-disable no-plusplus */
class LoaderElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const totalDiv = 12;

    for (let i = 1; i <= totalDiv; i++) {
      const div = document.createElement('div');
      this.appendChild(div);
    }

    this.classList.add('loader');
  }
}

customElements.define('loader-element', LoaderElement);
