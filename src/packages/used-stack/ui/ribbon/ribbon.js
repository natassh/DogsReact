import { showModal } from '../modal/modal.js';
import './ribbon.css';

const showRibbon = () => {
  addTitleToRibbon();
  addStackToPage();
  eventClickToShowModal();
};

const createRibbon = () => {
  const aside = document.createElement('aside');
  aside.className = 'stack';
  return aside;
};
const createStackTitleForRibbon = () => {
  const titleStack = document.createElement('h2');
  titleStack.className = 'stack__title';
  const textTitle = document.createTextNode('Used stack');
  titleStack.appendChild(textTitle);
  return titleStack;
};
const addTitleToRibbon = () => {
  const aside = createRibbon();
  const titleStack = createStackTitleForRibbon();
  aside.appendChild(titleStack);
  return aside;
};
const addStackToPage = () => {
  const container = document.querySelector('body');
  const mainHeader = document.querySelector('.main-header');
  const aside = addTitleToRibbon();
  container.insertBefore(aside, mainHeader);
};
const eventClickToShowModal = () => {
  const aside = document.querySelector('.stack');
  aside.addEventListener('click', e => {
    if (!document.querySelector('.modal')) {
      showModal();
    }
  });
};

export { showRibbon };
