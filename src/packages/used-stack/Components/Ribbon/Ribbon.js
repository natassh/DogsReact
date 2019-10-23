import React from 'react';

import './Ribbon.css';

function Ribbon({ text }) {
  return (
    <aside className="stack">
      <h2 className="stack__title">{text}</h2>
    </aside>
  );
}

export default Ribbon;
