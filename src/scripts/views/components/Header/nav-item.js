class NavItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set attribute(attribute) {
    this._attribute = attribute;
    this.render();
  }

  render() {
    const {
      path, target, rel, label,
    } = this._attribute;

    this.innerHTML = `
      <a
        class="nav-link"
        href="${path}"
        ${target ? `target="${target}"` : ''}
        ${rel ? `rel="${rel}"` : ''}
      >
        ${label}
      </a>
    `;
  }
}

customElements.define('nav-item', NavItem);
