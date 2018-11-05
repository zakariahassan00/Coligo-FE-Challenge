import React, { Component } from "react";
import { connect } from "react-redux";
import { getAnnouncements } from "../actions/announcementsAction";
import Post from "./common/post";
import Loading from "./common/loading";
import SectionTop from "./common/sectionTop";

class Announcements extends Component {
  // getting the fake data from redux
  componentDidMount() {
    this.props.getAnnouncements();
  }

  render() {
    const { announcements } = this.props;
    return (
      <div className="announcements">
        <div className="announ_heading">
          <SectionTop
            title={"Announcements"}
            mssg={"We educate warriors Keep Updated"}
            link={"annoncements"}
          />
        </div>

        {/*  first check the announcemets whether its ture or false */}
        {announcements ? (
          // if the announcemets is true render Posts
          <div className="announ_body">
            {announcements.map(announcement => (
              <Post announcement={announcement} key={announcement.id} />
            ))}
          </div>
        ) : (
          // if the announcemets is false render Loading
          <Loading />
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
