import React from 'react';
import { Link } from 'react-router-dom';

class Article extends React.Component {
  render() {
    const { completation } = this.props.match.params;
    return (
      <section>
        <nav>
          <Link to="/">voltar</Link>
        </nav>
        <h1>{ this.props.name }, { completation }</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, perspiciatis. Possimus assumenda natus unde error sit impedit culpa sed. Minima, inventore quos. Sed cupiditate mollitia et consequatur ducimus quia asperiores, molestias aliquam ab libero illum. Laudantium consequatur unde dicta similique corporis voluptate optio, temporibus blanditiis debitis delectus soluta voluptas ea.</p>
      </section>
    );
  }
}

export default Article;