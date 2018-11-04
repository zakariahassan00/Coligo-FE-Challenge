// this is hard coded navbar , but its values can be replaced by any external data any time

import React, { Component } from "react";
import NavSearch from "./common/navSearch";
import NavProfile from "./common/navProfile";

class Navbar extends Component {
  state = {
    profile: {
      name: "Talia",
      messages: 7,
      notifications: 4,
      img: "./images/profile.jpg"
    }
  };

  handleSearch = query => {
    this.setState({ query });
    // this function fires on search for something
    // store it on the state for later use
    console.log(query);
  };

  render() {
    const { profile } = this.state;
    return (
      <nav>
        <div className="nav_item nav_heading">
          <h1>Welcome {profile.name},</h1>
        </div>
        <NavSearch onSearch={this.handleSearch} />
        <NavProfile profile={profile} />
      </nav>
    );
  }
}

export default Navbar;
