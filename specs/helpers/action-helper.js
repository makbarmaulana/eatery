/* eslint-disable import/prefer-default-export */

// Simulate click Event
const clickEvent = async (element) => {
  await document.querySelector(element).dispatchEvent(new Event('click'));
};

export { clickEvent };
