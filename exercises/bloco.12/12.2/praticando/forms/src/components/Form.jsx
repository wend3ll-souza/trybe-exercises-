import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        
        this.handleTextArea = this.handleTextArea.bind(this);
        
        this.state = {
            textArea: '',
            number: 0,
            checkbox: true,
        };
    }

    handleTextArea (event) {
        this.setState({
          textArea: event.target.value
        })
    }

    render() {
        return (<div>
            <h1>Praticando React</h1>
            <form action="">
                <label>
                    Area para Texto:
                    <textarea name="textArea" value={this.state.textArea} onChange={this.handleTextArea}/>
                </label>
                <label>
                    Number:
                    <input type="number" name="number"/>
                </label>
                <label>
                    CheckBox:
                    <input type="checkbox" name="checkbox"/>
                </label>
            </form>
        </div>)
    }
}

export default Form;