import React from 'react';
import PropTypes from 'prop-types';

import CloseButton from '../CloseButton/CloseButton';
import TitleModal from '../TitleModal/TitleModal';
import LinkPersonalWeb from '../LinkPersonalWeb/LinkPersonalWeb';
import ListStack from '../ListStack/ListStack';

import './Modal.css';

class Modal extends React.Component {
  handleCloseButtonClick = e => {
    e.preventDefault();
    const { onClose } = this.props;
    onClose();
  };
  render() {
    return (
      <aside className="modal">
        <div className="modal__container">
          <CloseButton text="X" onClick={this.handleCloseButtonClick} />
          <article className="modal__content">
            <TitleModal text="Proyecto desarrollado con:" />
            <ListStack />
          </article>
          <LinkPersonalWeb
            href="https://natassh.github.io/myweb/"
            text="¿ Quieres saber más sobre mi ?"
          />
        </div>
      </aside>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onChange: PropTypes.func
};
