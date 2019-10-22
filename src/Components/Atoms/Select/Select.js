import React from 'react';
import BreedSelect from '../BreedSelect/BreedSelect';

import './Select.css';

function Select({ id }) {
  return (
    <select id={id} className="form__select">
      <BreedSelect />
    </select>
  );
}

export default Select;
