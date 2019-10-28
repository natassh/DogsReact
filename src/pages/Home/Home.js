import React from 'react';

import Logo from '../../Components/Molecules/Logo/Logo';
import FormSearchBreed from '../../Components/Molecules/FormSearchBreed/FormSearchBreed';
import ListPhotos from '../../Components/Molecules/ListPhotos/ListPhotos';

import '../../App/styles/app.css';
import './Home.css';

class Home extends React.Component {
  state = { photos: [] };

  _handleResults = results => {
    this.setState({ photos: results.message });
  };

  render() {
    const photos = this.state.photos;
    return (
      <>
        <Logo />
        <main className="main-content">
          <FormSearchBreed onGetDataPhotos={this._handleResults} />
        </main>
        <ListPhotos photos={photos} />
      </>
    );
  }
}

export default Home;
