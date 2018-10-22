import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
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
                            <Link to="/"><i class="fas fa-home"></i> Dashboard</Link>
                        </li>
                        <li className="item">
                            <Link to="schedule"><i class="far fa-calendar-alt"></i> Schedule</Link>
                        </li>
                        <li className="item">
                            <Link to="courses"><i class="fas fa-book"></i> Courses</Link>
                        </li>
                        <li className="item">
                            <Link to="gradebook"><i class="fas fa-graduation-cap"></i> Gradebook</Link>
                        </li>
                        <li className="item">
                            <Link to="performance"><i class="fas fa-chart-line"></i> Performance</Link>
                        </li>
                        <li className="item">
                            <Link to="announcements"><i class="fas fa-bullhorn"></i> Announcements</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar ;