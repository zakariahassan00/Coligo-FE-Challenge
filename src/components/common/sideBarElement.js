import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBarElement extends Component {
  render() {
    const { element } = this.props;
    const link = element.name.toLowerCase();

    return (
      <li className="item">
        <Link to={link}>
          <div>
            <i className={element.awf} />
            {element.name}
          </div>
        </Link>
      </li>
    );
  }
}

export default SideBarElement;
