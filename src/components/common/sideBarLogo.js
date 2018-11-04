import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLogo extends Component {
  render() {
    const { name, img } = this.props;
    return (
      <div>
        <Link to="/">
          <h1>{name}</h1>
        </Link>
      </div>
    );
  }
}

export default NavLogo;
