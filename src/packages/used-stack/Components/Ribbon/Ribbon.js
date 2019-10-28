import React from 'react';
import PropTypes from 'prop-types';

import './Ribbon.css';

class Ribbon extends React.Component {
  _handleClick = dato => {
    const { onChange } = this.props;
    onChange('true');
  };

  render() {
    return (
      <aside className="stack" onClick={this._handleClick}>
        <h2 className="stack__title">USED STACK</h2>
      </aside>
    );
  }
}

export default Ribbon;

Ribbon.propTypes = {
  onChange: PropTypes.func
};
