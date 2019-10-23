import React from 'react';

import './LinkPersonalWeb.css';

function LinkPersonalWeb({ href, text }) {
  return (
    <a href={href} class="link-web" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default LinkPersonalWeb;
