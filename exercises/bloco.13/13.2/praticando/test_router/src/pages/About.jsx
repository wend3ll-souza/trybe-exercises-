import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <section>
        <nav>
          <Link to="/">voltar</Link>
        </nav>
        <h1>About</h1>
      </section>
    );
  }
}

export default About;