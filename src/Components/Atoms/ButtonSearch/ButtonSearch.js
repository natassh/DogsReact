import React from 'react';
import PropTypes from 'prop-types';

import './ButtonSearch.css';

function ButtonSearch({ type, id, value }) {
  return (
    <input type={type} id={id} value={value} className="form__btn-submit" />
  );
}

export default ButtonSearch;

ButtonSearch.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string
};
