import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { MyProjects } from '../pages/MyProjects/MyProjects';

import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={MyProjects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
