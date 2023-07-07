const LoaderIndicator = {
  init({ container }) {
    this._container = container;
    this._loader = document.createElement('loader-element');

    this._show();
  },

  _show() {
    this._container.appendChild(this._loader);
    this._loader.classList.add('show');
  },

  hide() {
    this._loader.remove();
  },
};

export default LoaderIndicator;
