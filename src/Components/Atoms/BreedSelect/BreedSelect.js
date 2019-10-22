import React from 'react';

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
        //console.log(typeof data);//Objeto
        //const breeds = data.message;
        //console.log(breeds);
        const { breeds } = data.message;
        this.setState({ breeds });
        //console.log(this.state.breeds);
      });
  }

  render() {
    return <option value="whippet">whippet</option>;
  }
}
export default BreedSelect;
