/*
    this is sidebar or navbar item component.
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Element extends Component {
  state = {
    setup: {
      name: this.props.name,
      img: this.props.img,
      awf: this.props.awf
    }
  };

  render() {
    const link = this.state.setup.name.toLowerCase();
    return (
      <Link to={link}>
        <div>
          <i className={this.state.setup.awf} />
          {this.state.setup.name}
        </div>
      </Link>
    );
  }
}

export default Element;
