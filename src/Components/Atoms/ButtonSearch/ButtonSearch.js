import React from 'react';

import './ButtonSearch.css';

function ButtonSearch({ type, id, value }) {
  return (
    <input type={type} id={id} value={value} className="form__btn-submit" />
  );
}

export default ButtonSearch;
