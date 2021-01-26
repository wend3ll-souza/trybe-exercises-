import React, { Component } from 'react';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import './bootstrap.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1 className="text-center text-white mt-5"> Pokedex </h1>
        <Pokedex pokemons={ pokemons } />
      </main>
    );
  }
}

export default App;
