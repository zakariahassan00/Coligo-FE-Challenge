import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./Homepage";
import store from "../store/store";
import "../css/index.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" render={() => <HomePage />} />
        </div>
      </Provider>
    );
  }
}

export default App;
