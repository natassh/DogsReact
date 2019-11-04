import React from 'react';
import PropTypes from 'prop-types';

//import Select from '../../Atoms/Select/Select';
import Select from 'react-select';

import './BreedSelect.css';

class BreedSelect extends React.Component {
  state = {
    breeds: [],
    value: 'a'
  };

  componentDidMount = () => {
    const endPoint = 'https://dog.ceo/api/breeds/list/all';
    fetch(endPoint)
      .then(res => res.json())
      .then(data => {
        //console.log(data.message);
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

    onChange(dato.value);
    this.setState({ value: dato.value });
  };

  createObjectOptions = () => {
    let { breeds } = this.state;
    breeds = Object.keys(breeds);

    const arrayOptionsObjects = breeds.map(breed => ({
      value: breed,
      label: breed
    }));

    return arrayOptionsObjects;
  };
  render() {
    return (
      <Select
        options={this.createObjectOptions()}
        onChange={this._handleChange}
      />
    );
  }
}

export default BreedSelect;

BreedSelect.propTypes = {
  onChange: PropTypes.func
};
