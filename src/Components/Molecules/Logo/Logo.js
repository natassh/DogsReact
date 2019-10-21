import React from 'react';
import TitleLogo from '../../Atoms/TitleLogo/TitleLogo';
import ImageLogo from '../../Atoms/ImageLogo/ImageLogo';
import './Logo.css';

const Logo = () => {
  return (
    <header className="logo">
      <TitleLogo>Razas de perros</TitleLogo>
      <ImageLogo />
    </header>
  );
};

export default Logo;
