import React from 'react';
import Pokedex from '../Pokedex';

class Button extends React.Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked')
    }
    
    render() {
        return <button className="next" onClick={this.handleClick}>{this.props.value}</button>
    }
}

export default Button;