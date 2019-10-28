import React from 'react';
import PropTypes from 'prop-types';

import './Label.css';

function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="form__label">
      {text}
    </label>
  );
}

export default Label;

Label.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string
};
