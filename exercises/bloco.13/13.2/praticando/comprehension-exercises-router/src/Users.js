import React from 'react';
import { Link } from 'react-router-dom';
 
const Users = ({ greetingMessage, match }) => {
return (
   <div>
        <nav>
          <Link to="/">Voltar</Link>
       </nav>
      <h2> Users </h2>
      <p> { greetingMessage }, this is my awesome Users component { match.params.message } </p>
    </div>
  );
}
export default Users;
