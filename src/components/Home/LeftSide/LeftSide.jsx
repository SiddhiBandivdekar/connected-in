import React from "react";
import "./LeftSide.scss";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";
import AddIcon from "@mui/icons-material/Add";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="card">
        <div className="userInfo">
          <img
            src="/images/Linkedin-bg.png"
            className="cardBackground"
            alt=""
          />
          <a>
            <AddAPhotoIcon className="photo" />
            <div className="link">Welcome, there!</div>
          </a>
          <a>
            <div className="addPhotoText">Add a photo</div>
          </a>
        </div>
        <div className="widget">
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <PersonAddAltTwoToneIcon />
          </a>
        </div>
        <div className="item">
          <span>
            <BookmarkTwoToneIcon />
            <p>My items</p>
          </span>
        </div>
      </div>
      <div className="communityCard">
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>Events</span>
          <AddIcon />
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </div>
    </div>
  );
};

export default LeftSide;
