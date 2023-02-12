import React from "react";
import "./Home.scss";

const Home = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="layout">
          <div className="left">Left side</div>
          <div className="main">Main</div>
          <div className="right">Right side</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
