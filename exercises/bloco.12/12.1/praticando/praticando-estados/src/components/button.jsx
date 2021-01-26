import React from 'react';
import buttons from '../data';

class Button extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click');
    }

    render(){
       return (
        {
           buttons.map((button) => <button onClick={ button.text }>{ button.text }</button>)
        }
       );
    }
}

export default Button;