import React from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../../Atoms/ExternalLink/ExternalLink';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <h3 className="link">
        <Link to="/projects">Mis proyectos</Link>
      </h3>
      <ExternalLink
        className="tw"
        href="https://twitter.com/natassh"
        text="Twitter"
      />
      <ExternalLink
        className="lk"
        href="https://www.linkedin.com/in/natacha-ivannikova-261478113/"
        text="Linkedin"
      />
      <ExternalLink
        className="gh"
        href="https://github.com/natassh"
        text="GitHub"
      />
    </footer>
  );
}

export default Footer;
