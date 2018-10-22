// this is hard coded navbar , but its values can be replaced by any external data any time

import React, { Component } from 'react';

class Navbar extends Component {
    state = {
        profile: {
            name: 'Talia',
            messages: 7 ,
            notifications : 4,
            img: "./images/profile.jpg"
        }
    }

    search () {
        // this function fires on search for something
        //  get the the search word then do whatever with it
        let searchWord = document.getElementById('search_box').value ;
        console.log(searchWord);
    } 
    
    render() {
        return(
            <nav>
                <div className="nav_item nav_heading">
                    <h1>Welcome {this.state.profile.name},</h1>
                </div>

                <div className="nav_item nav_search">
                    <button type="submit"  ><i className="fa fa-search"></i></button>
                    <input id="search_box" type="text" placeholder="Search" onChange={this.search}/>
                </div>

                <div className="nav_item nav_notification">
                    <div className="bell">
                        <i className="fas fa-bell"></i>
                        <span id="noti">{this.state.profile.notifications}</span>
                    </div>
                    <div className="mail">
                        <i className="fas fa-envelope"></i>
                        <span id="msg">{this.state.profile.messages}</span>
                    </div>
                    <div className="account">
                        <div><img src={this.state.profile.img} alt="das"/></div>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Navbar