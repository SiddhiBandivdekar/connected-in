import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <span className="header-logo">
            <a href="/home">
              <img src="/images/header-logo.png" />
            </a>
          </span>
          <div className="search">
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <SearchIcon className="search-icon" />
          </div>
          <div className="nav">
            <ul className="navListWrap">
              <li className="navList">
                <a>
                  <HomeRoundedIcon />
                  <span>Home</span>
                </a>
              </li>
              <li className="navList">
                <a>
                  <GroupRoundedIcon />
                  <span>My Network</span>
                </a>
              </li>
              <li className="navList">
                <a>
                  <WorkRoundedIcon />
                  <span>Jobs</span>
                </a>
              </li>
              <li className="navList">
                <a>
                  <SmsRoundedIcon />
                  <span>Messaging</span>
                </a>
              </li>
              <li className="navList">
                <a>
                  <NotificationsRoundedIcon />
                  <span>Notifications</span>
                </a>
              </li>
              <li className="user navList">
                <a>
                  <PersonPinIcon />
                  <span>
                    Me
                    <ArrowDropDownIcon />
                  </span>
                </a>
                <div className="signOut">
                  <a>Sign Out</a>
                </div>
              </li>
              <li className="work navList">
                <a>
                  <AppsIcon />
                  <span>
                    Work
                    <ArrowDropDownIcon />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
