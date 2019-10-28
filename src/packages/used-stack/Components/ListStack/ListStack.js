import React from 'react';
import ItemListStack from '../ItemListStack/ItemListStack';
import imageJs from '../../assets/images/js.png';
import imageWebpack from '../../assets/images/webpack.jpg';
import imageTools from '../../assets/images/tools.png';
import imageCss from '../../assets/images/css3.png';
import imageHtml from '../../assets/images/html5.png';

import './ListStack.css';

function ListStack() {
  return (
    <ul className="list-stack">
      <ItemListStack
        src={imageJs}
        alt="Logo JavaScript"
        title="ES6"
        content="En este proyecto uso Arrow Functions, const, let, Async/Await, ES6 Modules, Fetch, etc."
      />
      <ItemListStack
        src={imageWebpack}
        alt="Logo Webpack"
        title="Webpack"
        content="Webpack como module bundle aprendiendo a configurarlo a mano."
      />
      <ItemListStack
        src={imageTools}
        alt="Logo Tools"
        title="Tooling"
        content="ESLint y Netlify para el deploy."
      />
      <ItemListStack
        src={imageCss}
        alt="Logo CSS"
        title="CSS"
        content="Usando metodología BEM y Atomic Design para la división de los estilos. Con PostCSS y Custom properties (variables CSS) para escribir CSS moderno."
      />
      <ItemListStack
        src={imageHtml}
        alt="Logo Html5"
        title="Html5"
        content="Marcado semántico (aside, section, figure, etc.)"
      />
    </ul>
  );
}

export default ListStack;
