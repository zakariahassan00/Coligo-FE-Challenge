import React from "react";

const NavProfile = ({ profile }) => {
  return (
    <div className="nav_item nav_notification">
      <div className="bell">
        <i className="fas fa-bell" />
        <span id="noti">{profile.notifications}</span>
      </div>
      <div className="mail">
        <i className="fas fa-envelope" />
        <span id="msg">{profile.messages}</span>
      </div>
      <div className="account">
        <div>
          <img src={profile.img} alt="das" />
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
