const fullScreenModal = document.querySelector('#full-screen-modal');
const showFullScreenModal = () => {
  fullScreenModal.openModal();
};

const limitedModal = document.querySelector('#limited-modal');

let isModalStanded = false;
const showLimitedModal = () => {
  limitedModal.openModal();
  isModalStanded = true;
};