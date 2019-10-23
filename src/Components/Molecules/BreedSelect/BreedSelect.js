import React from 'react';
import Select from '../../Atoms/Select/Select';

import './BreedSelect.css';

class BreedSelect extends React.Component {
  state = {
    breeds: {}
  };

  componentDidMount() {
    const endPoint = 'https://dog.ceo/api/breeds/list/all';
    fetch(endPoint)
      .then(res => res.json())
      .then(data => {
        const { message: breeds } = data;
        this.setState({ breeds });
      });
  }

  createOptions = breeds => {
    let options = breeds.map(breed => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ));
    return options;
  };

  render() {
    const breeds = Object.keys(this.state.breeds);
    return <Select id="dog-selector" options={this.createOptions(breeds)} />;
  }
}

export default BreedSelect;
