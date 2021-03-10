import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Count from './components/Count';
import { store } from './store';

class App extends Component {
    render() {
        return(
          <Provider store={store}>
            <Count />
          </Provider>
        );
    }
}

export default App;
