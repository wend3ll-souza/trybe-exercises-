import React, { Component } from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['lavar roupa', 'cozinhar', 'Estudar']

function App() {
  return (<ul>{ tasks.map(item => task(item)) }</ul>)
}

export default App;