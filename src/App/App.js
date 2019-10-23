import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { MyProjects } from '../pages/MyProjects/MyProjects';

import Footer from '../Components/Molecules/Footer/Footer';
import Ribbon from '../packages/used-stack/Components/Ribbon/Ribbon';

import './styles/app.css';

function App() {
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
      <Ribbon text="Used stack" />
    </div>
  );
}

export default App;
