import React from 'react';
import PropTypes from 'prop-types';

import './Project.css';

function Project({ title, content, link, linkText }) {
  return (
    <article className="itemProject">
      <h2>{title}</h2>
      <p>{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </article>
  );
}

export default Project;

Project.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};
