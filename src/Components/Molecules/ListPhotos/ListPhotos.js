import React from 'react';
import PropTypes from 'prop-types';

import * as Marvina from 'marvina-carousel-react';

import './ListPhotos.css';

class ListPhotos extends React.Component {
  printPhotos = breedPhotos => {
    let photos = breedPhotos.map(photo => (
      <figure key={photo} className="mc-carousel-element">
        <img src={photo} alt="imagen de perro" />
      </figure>
    ));
    return photos;
  };

  render() {
    const breedPhotos = this.props.photos;
    return (
      <Marvina.Group minImage={2}>
        {this.printPhotos(breedPhotos)}
      </Marvina.Group>
    );
  }
}

export default ListPhotos;

ListPhotos.propTypes = {
  breedPhotos: PropTypes.array
};
