/* 
 * stateless Sidebar component (since no need for any state in the side bar at least for this version of APP) 
 */ 

import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    return(
        <div className="sidebar">
            {/* Sidebar logo area */}
            <div className="sidebar_head">
                <Link to="/"><h1>Coligo</h1></Link>
            </div>

            {/* Sidebar items */}
            <div className="sidebar_body">
                <ul>
                    <li className="item">
                        <Link to="/"><i className="fas fa-home"></i> Dashboard</Link>
                    </li>
                    <li className="item">
                        <Link to="schedule"><i className="far fa-calendar-alt"></i> Schedule</Link>
                    </li>
                    <li className="item">
                        <Link to="courses"><i className="fas fa-book"></i> Courses</Link>
                    </li>
                    <li className="item">
                        <Link to="gradebook"><i className="fas fa-graduation-cap"></i> Gradebook</Link>
                    </li>
                    <li className="item">
                        <Link to="performance"><i className="fas fa-chart-line"></i> Performance</Link>
                    </li>
                    <li className="item">
                        <Link to="announcements"><i className="fas fa-bullhorn"></i> Announcements</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar ;