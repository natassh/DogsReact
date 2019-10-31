import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../pages/Home/Home';
import { MyProjects } from '../pages/MyProjects/MyProjects';

import Footer from '../Components/Molecules/Footer/Footer';
import Ribbon from '../packages/used-stack/Components/Ribbon/Ribbon';
import Modal from '../packages/used-stack/Components/Modal/Modal';

import './styles/app.css';

class App extends React.Component {
  state = {
    isOpen: ''
  };
  handleIsOpen = value => {
    this.setState({ isOpen: value });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="App">
        <section>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={MyProjects} />
            </Switch>
            <Footer />
          </Router>
        </section>
        <Ribbon text="Used stack" onChange={this.handleIsOpen} />
        {this.state.isOpen && <Modal onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

export default App;
