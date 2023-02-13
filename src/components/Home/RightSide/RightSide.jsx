import React from "react";
import "./RightSide.scss";
import InfoIcon from "@mui/icons-material/Info";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const RightSide = () => {
  return (
    <div className="main">
      <div className="followCard">
        <div className="title">
          <h2>Add to your feed</h2>
          <InfoIcon />
        </div>

        <div className="feedList">
          <li>
            <a>
              <div>
                <TagRoundedIcon className="avatar" />
              </div>
            </a>
            <div>
              <span>#Connectedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <div>
                <TagRoundedIcon className="avatar" />
              </div>
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </div>
        <div className="recommendation">
          View all recommendations
          <ArrowRightAltRoundedIcon />
        </div>
      </div>
      <div className="bannerCard">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightSide;
