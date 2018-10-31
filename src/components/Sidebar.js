/* 
 * stateless Sidebar component (since no need for any state in the side bar at least for this version of APP) 
 */ 

import React, { Component }from 'react'
import Logo from './sidebar/logo';
import Element from './sidebar/element';

class Sidebar extends Component {

    state = {
        elements : [
            {
                id: 1,
                name : "Dashboard",
                img: "",
                awf: "fas fa-home"
            },
            {
                id: 2,
                name : "Schedule",
                img: "",
                awf: "far fa-calendar-alt"
            },
            {
                id: 3,
                name : "Courses",
                img: "",
                awf: "fas fa-book"
            },
            {
                id: 4,
                name : "Gradebook",
                img: "",
                awf: "fas fa-graduation-cap"
            },
            {
                id: 5,
                name : "Performance",
                img: "",
                awf: "fas fa-chart-line"
            },
            {
                id: 6,
                name : "Announcements",
                img: "",
                awf: "fas fa-bullhorn"
            },
        ]
    }

    render () {
        return(
            <div className="sidebar">
                {/* Sidebar logo Component */}
                <div className="sidebar_head">
                    <Logo name={'Coligo'}/>
                </div>

                {/* Sidebar elemnts */}
                <div className="sidebar_body">
                    <ul>
                        {this.state.elements.map( (element) => (
                            <li className="item" key={element.id}>
                                <Element name={element.name} awf={element.awf} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
}
}

export default Sidebar ;