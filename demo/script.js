const fullScreenModal = document.querySelector('#full-screen-modal');
const showFullScreenModal = () => {
  fullScreenModal.isModalOpened = true;
};

const limitedModal = document.querySelector('#limited-modal');

let isModalStanded = false;
const showLimitedModal = () => {
  limitedModal.isModalOpened = true;
  isModalStanded = true;
};