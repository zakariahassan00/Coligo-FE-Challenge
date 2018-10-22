import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Announcements extends Component {

        state = {}

        componentDidMount() {
            // when the component mount get the data from the fake announcemets from fakeAnnouncmentService
            const members = this.fakeAnnouncmentService ();
            this.setState({members});
        }

        fakeAnnouncmentService () {
            const fakeData = [
                {
                    id:0,
                    memberName: 'Mr.Ahmed Mostafa',
                    img : './images/member-2.jpg',
                    department: 'Math 101',
                    post : 'hi my heros i want you ready to our exams and focus on remaining assesments to gain more grades, good luck my warriors'
                },
                {
                    id:1,
                    memberName: 'Mrs.Salma Ahmed',
                    img : './images/member-1.jpg',
                    department: 'Physics 02',
                    post : 'hi my heros i want you ready to our exams hi my heros i want you ready to our exams hi my heros i want you ready to our exams hi my heros i want you ready to our exams hi my heros i want you ready to our exams and focus on remaining assesments to gain more grades, good luck my warriors'
                },
                {
                    id:2,
                    memberName: 'School Managment',
                    img : './images/member-3.jpg',
                    department: 'Managment',
                    post : 'hi my heros i want you ready to our exams and focus on remaining assesments to gain more grades, good luck my warriors'
                },
            ];
            return fakeData;    
        }

        render () {
            return (
            <div className="announcements">
                <div className="announ_heading">
                    <h2>Announcements</h2>
                    <p>We educate warriors Keep Updated</p>
                    <Link to="/announcements">All</Link>
                </div>

                {/*  first check the state whether its ture or false */}
                {this.state.members ?
                
                // if the state is true the content
                    (<div className="announ_body">
                    {this.state.members.map( (member) => (
                        <div className="post" key={member.id}>
                            <div className="post_head">
                                <div className="post_img">
                                    <img src={member.img} alt="member face"/>
                                </div>
                                <div className="post_info">
                                    <h4>{member.memberName}</h4>
                                    <p>{member.department}</p>
                                </div>
                            </div>
                            <div className="post_body">
                                <p>{member.post}</p>
                            </div>
                        </div>
                        )
                    )}
                </div>):

                // if the state is false render Loading
                (
                    <div id="loading"><h1>Loading Posts...</h1></div>
                )}
            </div>
            )
    }
}

export default Announcements