const TabBarInitiator = {
  init({ button, content }) {
    this._button = button;
    this._content = content;

    this._button.addEventListener('click', (event) => {
      this._handleTabClick(event.target);
    });
  },

  _handleTabClick(clickedButton) {
    const activeButton = this._button.querySelector('.active');
    const activeContent = this._content.querySelector('.active');

    this._deactivateTab(activeButton, activeContent);
    this._activateTab(clickedButton);
  },

  _deactivateTab(button, content) {
    button.classList.remove('active');
    content.classList.remove('active');
  },

  _activateTab(button) {
    const content = this._content.querySelector(`#${button.id}`);
    button.classList.add('active');
    content.classList.add('active');
  },
};

export default TabBarInitiator;
