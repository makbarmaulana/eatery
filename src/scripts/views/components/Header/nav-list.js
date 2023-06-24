import navigationAttributes from '../../../utils/navigation-attributes';
import './nav-item';

class NavList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '';
    navigationAttributes?.forEach((attribute) => {
      const navItemElement = document.createElement('nav-item');
      navItemElement.classList.add('app-bar__nav-item');
      navItemElement.attribute = attribute;

      this.appendChild(navItemElement);
    });
  }
}

customElements.define('nav-list', NavList);
