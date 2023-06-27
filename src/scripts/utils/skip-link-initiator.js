const SkipLinkInitiator = {
  init({ skipLink, content }) {
    skipLink.addEventListener('click', (event) => {
      this._skipToContent({ event, content, skipLink });
    });
  },

  _skipToContent({ event, content, skipLink }) {
    event.preventDefault();
    const mainContent = content.querySelector('#mainContent');

    mainContent.scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
  },
};

export default SkipLinkInitiator;
