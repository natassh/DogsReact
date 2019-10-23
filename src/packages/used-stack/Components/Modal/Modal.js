import React from 'react';
import CloseButton from '../CloseButton/CloseButton';
import TitleModal from '../TitleModal/TitleModal';
import LinkPersonalWeb from '../LinkPersonalWeb/LinkPersonalWeb';
import ListStack from '../ListStack/ListStack';

import './Modal.css';

function Modal() {
  return (
    <div className="modal__container">
      <CloseButton text="X" />
      <article>
        <TitleModal text="Proyecto desarrollado con:" />
        <ListStack />
      </article>
      <LinkPersonalWeb
        href="https://natassh.github.io/myweb/"
        text="¿ Quieres saber más sobre mi ?"
      />
    </div>
  );
}

export default Modal;
