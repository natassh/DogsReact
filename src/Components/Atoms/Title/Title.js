import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ children }) => (
  <h1 className=" title logo__title">{children}</h1>
);

export default Title;

Title.propTypes = {
  children: PropTypes.node
};
