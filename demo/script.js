const body = document.querySelector('body');

body.onload = () => {
  const firstButton = document.querySelector('#first-button');
  firstButton.onclick = showFullScreenModal;
  const secondButton = document.querySelector('#second-button');
  secondButton.onclick = showLimitedModal;
}

function setModalData (modal = {}, data = {}){
  modal.modalTitle = data.modalTitle;
  modal.modalMessage = data.modalMessage;
  modal.modalFooterMessage = data.modalFooterMessage;
}

const modalData = {
  modalTitle: 'This is a modal title',
  modalMessage: 'This is a modal message',
  modalFooterMessage: 'This is a footer message',
}

const fullScreenModal = document.querySelector('#full-screen-modal');
fullScreenModal.isCloseButtonDisplayed = true;
const showFullScreenModal = () => {
  setModalData(fullScreenModal, modalData);
  fullScreenModal.isModalOpened = true;
};

const limitedModal = document.querySelector('#limited-modal');
limitedModal.isCloseButtonDisplayed = true;

const showLimitedModal = () => {
  setModalData(limitedModal, modalData);
  limitedModal.isModalOpened = true;
};