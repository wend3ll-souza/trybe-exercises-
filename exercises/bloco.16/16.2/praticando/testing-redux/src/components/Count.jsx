import React, { Component } from 'react';
import { connect } from 'react-redux';


class Count extends Component {
  render() {
    const { text } = this.props;
      return(
          <div>
              <label htmlFor="input">
                  <input type="text" id="input"/>
              </label>
              <button type="button"> + </button>

              <ul>
                  tarefas
                  { text }
              </ul>
          </div>
      );
  }
}

const mapStateToProps = store => ({
    text: store.text
  });

export default connect(mapStateToProps)(Count);
  