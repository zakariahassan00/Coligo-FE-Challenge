import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Jumbotrone from "./Jumbotrone";
import Announcements from "./Announcements";
import WhatsDue from "./WhatsDue";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="main">
          <Navbar />
          <div className="container">
            <Jumbotrone />
            <Announcements />
            <WhatsDue />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
