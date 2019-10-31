import React from 'react';
import PropTypes from 'prop-types';

//import Select from '../../Atoms/Select/Select';
import Select from 'react-select';

import './ReactBreedSelect.css';

class ReactBreedSelect extends React.Component {
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
        //console.log(breeds);
      });
  };

  createOptions = breeds => {
    //console.log(breeds);
    let options = breeds.map(breed => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ));
    return options;
    //console.log(options)
  };

  _handleChange = dato => {
    console.log(dato);
    const { onChange } = this.props;

    // const selectData = event.target.value;
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

export default ReactBreedSelect;

ReactBreedSelect.propTypes = {
  onChange: PropTypes.func
};

/*
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]



<Select
    id="dog-selector"
    value={this.state.value}
    onChange={this._handleChange}
  >
    {this.createOptions(breeds)}
</Select>
*/
