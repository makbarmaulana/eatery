const TabBarInitiator = {
  init({ button, content }) {
    this._button = button;
    this._content = content;

    this._button.addEventListener('click', (event) => {
      this._handleTabClick(event.target);
    });
  },

  _handleTabClick(clickedButton) {
    const activeTab = this._button.querySelector('.active');
    const activeContent = this._content.querySelector('.active');

    this._deactivateTab(activeTab, activeContent);
    this._activateTab(clickedButton);
  },

  _deactivateTab(activeTab, activeContent) {
    activeTab.classList.remove('active');
    activeContent.classList.remove('active');
  },

  _activateTab(activeTab) {
    const content = this._content.querySelector(`#${activeTab.dataset.id}`);

    activeTab.classList.add('active');
    content.classList.add('active');
  },
};

export default TabBarInitiator;
