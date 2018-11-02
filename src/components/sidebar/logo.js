import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  state = {
    setup: {
      name: this.props.name
    }
  };

  render() {
    return (
      <div>
        <Link to="/">
          <h1>{this.state.setup.name}</h1>
        </Link>
      </div>
    );
  }
}

export default Logo;
