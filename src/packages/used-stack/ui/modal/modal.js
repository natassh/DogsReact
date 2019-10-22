import { getContentModal } from '../../service/get-content.js';
import './modal.css';

const showModal = () => {
  createModal();
  createModalContainer();
  createBtnCloseModal();
  getContentModal();
  eventCloseModal();
};

const createModal = () => {
  const body = document.querySelector('body');
  const modal = document.createElement('aside');
  modal.className = 'modal';
  body.appendChild(modal);
};

const createModalContainer = () => {
  const modal = document.querySelector('.modal');
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal__container';
  modal.appendChild(modalContainer);
};

const createBtnCloseModal = () => {
  const buttonClose = document.createElement('a');
  buttonClose.setAttribute('href', '#');
  buttonClose.className = 'close-btn';
  const textCloseBtn = document.createTextNode('X');
  buttonClose.appendChild(textCloseBtn);
  const modalContainer = document.querySelector('.modal__container');
  modalContainer.appendChild(buttonClose);
};

const eventCloseModal = () => {
  const buttonClose = document.querySelector('.close-btn');
  buttonClose.addEventListener('click', e => {
    e.preventDefault();
    closeModal();
  });
};

const closeModal = () => {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  body.removeChild(modal);
};

export { showModal };
