import React from 'react';

import './Label.css';

function Label({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className="form__label">
      {text}
    </label>
  );
}

export default Label;
