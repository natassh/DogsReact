import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

function Select({ id, children, breed, onChange }) {
  return (
    <select
      id={id}
      value={breed}
      onChange={e => onChange(e.target.value)}
      className="form__select"
    >
      {children}
    </select>
  );
}

export default Select;

Select.propTypes = {
  id: PropTypes.string,
  breed: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func
};
