import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Route exact path="/" component={  Home }/>
       <Route path="/about" component={ About }/>
       <Route path="/article/:completation" render={(props) => <Article {...props} name="Davous"/>}/>
      </BrowserRouter>
    );
  }
}

export default App;
