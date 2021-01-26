import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <section className="d-flex w-25 m-3 p-3 border border-dark bg-secondary text-white border-radius shadow col-12 col-lg-3">
                <div>
                    <h4>{ name }</h4>
                    <h5>{ type }</h5>
                    <h5>{averageWeight.value} {averageWeight.measurementUnit}</h5>
                </div>
                <img src={ image } alt={ name }/>
            </section>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
      }),
      image: PropTypes.string
    }).isRequired
  }
export default Pokemon;