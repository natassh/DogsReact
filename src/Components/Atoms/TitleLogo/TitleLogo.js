import React from 'react';
import PropTypes from 'prop-types';

import './TitleLogo.css';

const TitleLogo = ({ children }) => <h1 className="logo__title">{children}</h1>;

export default TitleLogo;

TitleLogo.propTypes = {
  children: PropTypes.node
};
