// this is hard coded navbar , but its values can be replaced by any external data any time

import React, { Component } from "react";

class Navbar extends Component {
  state = {
    profile: {
      name: "Talia",
      messages: 7,
      notifications: 4,
      img: "./images/profile.jpg"
    }
  };

  searchWord = () => {
    // this function fires on search for something
    //  get the the search word then do whatever with it
    console.log(this.search.value);
  };

  render() {
    return (
      <nav>
        <div className="nav_item nav_heading">
          <h1>Welcome {this.state.profile.name},</h1>
        </div>

        <div className="nav_item nav_search">
          <button type="submit">
            <i className="fa fa-search" />
          </button>
          <input
            ref={input => (this.search = input)}
            type="text"
            placeholder="Search"
            onChange={this.searchWord}
          />
        </div>

        <div className="nav_item nav_notification">
          <div className="bell">
            <i className="fas fa-bell" />
            <span id="noti">{this.state.profile.notifications}</span>
          </div>
          <div className="mail">
            <i className="fas fa-envelope" />
            <span id="msg">{this.state.profile.messages}</span>
          </div>
          <div className="account">
            <div>
              <img src={this.state.profile.img} alt="das" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
