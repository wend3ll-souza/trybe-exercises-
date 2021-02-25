import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <label htmlFor="id-email">
         Email 
       </label>
         <input id="id-email" type="email" />
      </div>
    );
  }
}

export default App;
