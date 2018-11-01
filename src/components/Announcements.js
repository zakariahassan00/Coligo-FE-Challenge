import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAnnouncements } from "../actions/announcementsAction";

class Announcements extends Component {
  // getting the fake data from redux
  componentWillMount() {
    this.props.getAnnouncements();
  }

  render() {
    return (
      <div className="announcements">
        <div className="announ_heading">
          <h2>Announcements</h2>
          <p>We educate warriors Keep Updated</p>
          <Link to="/announcements">All</Link>
        </div>

        {/*  first check the props.announcemets whether its ture or false */}
        {this.props.announcements ? (
          // if the props.announcemets is true the content
          <div className="announ_body">
            {this.props.announcements.map(announcement => (
              <div className="post" key={announcement.id}>
                <div className="post_head">
                  <div className="post_img">
                    <img src={announcement.img} alt="member face" />
                  </div>
                  <div className="post_info">
                    <h4>{announcement.memberName}</h4>
                    <p>{announcement.department}</p>
                  </div>
                </div>
                <div className="post_body">
                  <p>{announcement.post}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // if the props.announcemets is false render Loading
          <div id="loading">
            <h1>Loading Posts...</h1>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  announcements: state.announcements.data
});

export default connect(
  mapStateToProps,
  { getAnnouncements }
)(Announcements);
