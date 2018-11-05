/* 
 * stateless Sidebar component (since no need for any state in the side bar at least for this version of APP) 
 */
import React, { Component } from "react";
import SideBarLogo from "./common/sideBarLogo";
import SideBarElement from "./common/sideBarElement";

class Sidebar extends Component {
  state = {
    elements: [
      {
        id: 1,
        name: "Dashboard",
        img: "",
        awf: "fas fa-home"
      },
      {
        id: 2,
        name: "Schedule",
        img: "",
        awf: "far fa-calendar-alt"
      },
      {
        id: 3,
        name: "Courses",
        img: "",
        awf: "fas fa-book"
      },
      {
        id: 4,
        name: "Gradebook",
        img: "",
        awf: "fas fa-graduation-cap"
      },
      {
        id: 5,
        name: "Performance",
        img: "",
        awf: "fas fa-chart-line"
      },
      {
        id: 6,
        name: "Announcements",
        img: "",
        awf: "fas fa-bullhorn"
      }
    ]
  };

  render() {
    const { elements } = this.state;
    return (
      <div className="sidebar">
        {/* Sidebar logo Component */}
        <div className="sidebar_head">
          <SideBarLogo name={"Coligo"} />
        </div>

        {/* Sidebar elemnts */}
        <div className="sidebar_body">
          <ul>
            {elements.map(element => (
              <li className="item" key={element.id}>
                <SideBarElement element={element} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
