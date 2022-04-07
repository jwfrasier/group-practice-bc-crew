import "./Dashboard.css";
import { useSelector } from "react-redux";

import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="dashboardContainer">
        <div className="searchContainer">
          <input type="text" className="searchInputDashboard" />
          <button className="searchButtonDashboard">Search</button>
        </div>
        <div className="firstContainer">
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
        </div>
        <div className="secondContainer">
          <div className="box2-1">
            <div className="box2-1text"></div>
            <div className="box2-1pic"></div>
          </div>
          <div className="box2-2"></div>
        </div>
        <div className="thirdContainer">
          <div className="box3-1">
            <div className="box3-1pic"></div>
            <div className="box3-1text"></div>
            <div className="box3-1container"></div>
          </div>
          <div className="box3-2">
            <div className="box3-2text"></div>
            <div className="box3-2pic"></div>
          </div>
        </div>
      </div>
    </>
  );
}
