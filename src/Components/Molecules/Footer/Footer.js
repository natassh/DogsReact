import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <h3 className="link">
        <Link to="/projects">Mis proyectos</Link>
      </h3>
      <h3 className="link tw">
        <a href="https://twitter.com/natassh">Twitter</a>
      </h3>
      <h3 className="link lk">
        {' '}
        <a href="https://www.linkedin.com/in/natacha-ivannikova-261478113/">
          Linkedin
        </a>
      </h3>
    </footer>
  );
}

export default Footer;
