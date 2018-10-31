import React, { Component } from 'react';
import './css/index.css';
import HomePage from './components/Homepage'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path='/' render={() => (<HomePage />)} />
        </div>
      </Provider>
    );
  }
}

export default App;
