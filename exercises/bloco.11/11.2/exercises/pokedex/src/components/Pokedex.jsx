import React from 'react';
import Pokemon from '../components/Pokemon';

class Pokedex extends React.Component {
    render() {
        return(
            <section className="row">
                {this.props.pokemons.map(pokemon => <Pokemon key={ pokemon.id } pokemon={ pokemon }/>)}
            </section>
        );
    }
}

export default Pokedex;