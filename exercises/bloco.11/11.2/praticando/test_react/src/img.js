import React from 'react';

class Image extends React.Component {
  render() {
    return <img className="img-container" src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;