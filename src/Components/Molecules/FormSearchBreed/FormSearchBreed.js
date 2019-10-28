import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../Atoms/Label/Label';
import BreedSelect from '../../Molecules/BreedSelect/BreedSelect';
import ButtonSearch from '../../Atoms/ButtonSearch/ButtonSearch';

import './FormSearchBreed.css';

export class FormSearchBreed extends React.Component {
  state = {
    breedSelected: 'affenpinscher',
    photos: []
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { onGetDataPhotos } = this.props;

    const { breedSelected } = this.state;
    const endPoint =
      'https://dog.ceo/api/breed/' + breedSelected + '/images/random/25';

    fetch(endPoint)
      .then(res => res.json())
      .then(results => {
        onGetDataPhotos(results);
        this.setState({ photos: results });
      });
  };

  _handleWhenTheSelectDataChanges = selectData => {
    this.setState({ breedSelected: selectData });
  };

  render() {
    return (
      <form className="form" onSubmit={this._handleSubmit}>
        <Label htmlFor="dog-selector" text="Elige la raza:" />
        <BreedSelect onChange={this._handleWhenTheSelectDataChanges} />
        <ButtonSearch
          type="submit"
          id="btn-submit"
          value="Pulsa para mostrar"
        />
      </form>
    );
  }
}

export default FormSearchBreed;

FormSearchBreed.propTypes = {
  onGetDataPhotos: PropTypes.func
};
