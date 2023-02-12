import React from "react";
import "./Home.scss";
import LeftSide from "./LeftSide/LeftSide";
import Main from "./Main/Main";
import RightSide from "./RightSide/RightSide";

const Home = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="layout">
          <div className="left">
            <LeftSide />
          </div>
          <div className="main">
            <Main />
          </div>
          <div className="right">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
