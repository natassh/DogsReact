import React from 'react';
import PropTypes from 'prop-types';

import Select from '../../Atoms/Select/Select';

import './BreedSelect.css';

class BreedSelect extends React.Component {
  state = {
    breeds: {},
    value: 'a'
  };

  componentDidMount = () => {
    const endPoint = 'https://dog.ceo/api/breeds/list/all';
    fetch(endPoint)
      .then(res => res.json())
      .then(data => {
        const { message: breeds } = data;
        this.setState({ breeds });
      });
  };

  createOptions = breeds => {
    let options = breeds.map(breed => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ));
    return options;
  };

  _handleChange = dato => {
    const { onChange } = this.props;

    // const selectData = event.target.value;
    onChange(dato);
    this.setState({ value: dato });
  };

  render() {
    //console.log(this.state.value);
    const breeds = Object.keys(this.state.breeds);
    return (
      <Select
        id="dog-selector"
        value={this.state.value}
        onChange={this._handleChange}
      >
        {this.createOptions(breeds)}
      </Select>
    );
  }
}

export default BreedSelect;

BreedSelect.propTypes = {
  onChange: PropTypes.func
};
