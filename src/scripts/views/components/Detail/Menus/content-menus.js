class ContentMenus extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    if (!this._menus) return;
    const menuCategories = Object.keys(this._menus);

    this.innerHTML = menuCategories.map((menuCategory) => `
      <div class="menu">
        <h4 class="menu-category__title">${menuCategory}</h4>
        <ul class="menu-list">
        ${this._menus[menuCategory].map((item) => `<li>- ${item.name}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }
}

customElements.define('content-menus', ContentMenus);
