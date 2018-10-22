/* 
 * stateless jumbotrone component (since no need for any state in the side bar at least for this version of APP) 
 */

import React from 'react';

const Jumbotrone = (props) => {

        return(
            <div className="Jumbotrone">
                <div className="jumbo_content">
                    <h1 className="jumbo_heading">EXAMS TIME!</h1>
                    <div className="jumbo_body">
                        <p>Here we are, are you ready to fight?Don`t Worry,We prepared some tips to be ready for your exams</p>
                        <p>"Nothing happens until something moves - Albert Einstein"</p>
                    </div>
                    <button id="jumbo_button">View Exams Tips</button>
                </div>
                <div className="jumbo_image">
                    <img id="das" src="./images/desk.jpg" alt="ss" />
                </div>
            </div>
        )
}

export default Jumbotrone