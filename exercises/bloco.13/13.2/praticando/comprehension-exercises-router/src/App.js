import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About.js';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:message" render={ (props) => <Users {...props} greetingMessage="Good Morning" /> }/>
          <Route path="/strict-access" render={(props) => <StrictAccess {...props} user={{ username: "joao", password: "1234" }} /> } />
          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;