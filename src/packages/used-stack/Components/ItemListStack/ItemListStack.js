import React from 'react';
import image from '../assets/images/js.png';

import './ItemListStack.css';

function ItemListStack() {
  return (
    <li>
      <figure>
        <img src={image} alt="logo js" />
      </figure>
      <h3>ES6</h3>
      <p>
        En este proyecto uso Arrow Functions, const, let, Async/Await, ES6
        Modules, Fetch, etc.
      </p>
    </li>
  );
}

export default ItemListStack;
