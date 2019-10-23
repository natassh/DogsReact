import React from 'react';

import './CloseButton.css';

function CloseButton({ text }) {
  return (
    <a href="#" className="close-btn">
      {text}
    </a>
  );
}

export default CloseButton;
