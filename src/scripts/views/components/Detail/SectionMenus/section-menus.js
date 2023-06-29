class SectionMenus extends HTMLElement {
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
          ${SectionMenus._renderMenus(menuCategory, this._menus)}
        </ul>
      </div>
    `).join('');
  }

  static _renderMenus(menuCategory, menus) {
    let menuHTML = '';

    if (menuCategory && menuCategory.length > 0) {
      menuHTML = menus[menuCategory].map((item) => `<li>- ${item.name}</li>`).join('');
    } else {
      menuHTML = '<li>No Menu Found</li>';
    }

    return menuHTML;
  }
}

customElements.define('section-menus', SectionMenus);
