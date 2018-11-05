import React from "react";

const Post = ({ announcement }) => {
  return (
    <div className="post">
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
  );
};

export default Post;
