import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section>
        <nav>
          <Link to="/article">Artigo</Link>
          <Link to="/about">Sobre</Link>
        </nav>
        <h1>Hello World</h1>
      </section>
    );
  }
}

export default Home;
