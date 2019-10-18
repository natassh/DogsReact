import React from 'react';
import logo from '../../../assets/images/huella2.png';
import './ImageLogo.css';

export const ImageLogo = () => {
  return (
    <figure className="logo__picture">
      <img src={logo} className="App-logo" alt="logo" />
    </figure>
  );
};
