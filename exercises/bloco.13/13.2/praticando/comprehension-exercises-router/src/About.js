import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
      <nav>
        <Link to="/">Voltar</Link>
      </nav>
    <h2>About</h2>
    <p> My awesome About component </p>
  </div>
);

export default About;