import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div class="text">Nice blog post!</div>
      </div>
    </div>
  );
};

// to export this to Overall the Project.
export default CommentDetail;
