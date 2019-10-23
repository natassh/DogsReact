import React from 'react';

import './Select.css';

function Select({ id, options = [] }) {
  return (
    <select id={id} className="form__select">
      {options}
    </select>
  );
}

export default Select;
