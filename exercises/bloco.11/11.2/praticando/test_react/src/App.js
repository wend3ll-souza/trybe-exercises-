import React, { Component } from 'react';
import './App.css';
import Greeting from './greeting';
import Image from './img';
function App() {
  return (
    <div>
      <Image source="https://source.unsplash.com/random" alternativeText="imagem aleatoria"/>
      <Greeting name="Wend3ll" last="Bob"/>
    </div> 
  )
}

export default App;
