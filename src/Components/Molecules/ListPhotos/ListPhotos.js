import React from 'react';
import PropTypes from 'prop-types';

import './ListPhotos.css';

class ListPhotos extends React.Component {
  printPhotos = breedPhotos => {
    let photos = breedPhotos.map(photo => (
      <figure key={photo}>
        <img src={photo} alt="imagen de perro" />
      </figure>
    ));
    return photos;
  };

  render() {
    const breedPhotos = this.props.photos;
    return (
      <section id="carousel" className="list-photos mc">
        {this.printPhotos(breedPhotos)}
      </section>
    );
  }
}

export default ListPhotos;

ListPhotos.propTypes = {
  breedPhotos: PropTypes.array
};
