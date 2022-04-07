import "./Dashboard.css";
import { useSelector } from "react-redux";

import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="dashboardContainer">
        <div className="searchContainer">
          <div className="searchContent">
            <input
              type="text"
              className="searchInputDashboard"
              placeholder="Type here"
            />
            <button className="searchButtonDashboard">Search</button>
          </div>
        </div>
        <div className="firstContainer">
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
        </div>
        <div className="secondContainer">
          <div className="box2-1">
            <div className="box2-1text">
              <p className="textbox2 textbox2-1">Vestibulum lectus</p>
              <h2 className="textbox2 textbox2-2">Sagittis id consectetur</h2>
              <p className="textbox2 textbox2-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
            <div className="box2-1pic"></div>
          </div>
          <div className="box2-2">
            <img
              className="box-2pic"
              src="https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            />
          </div>
        </div>
        <div className="thirdContainer">
          <div className="box3-1">
            <div className="box3-1pic"></div>
            <div className="box3-1text">
              <h2 className="textFiller">In arcu cursus</h2>
            </div>
            <div className="box3-1container">
              <div className="box3-1small">
                <h3>Users</h3>
                <p>40,934</p>
              </div>
              <div className="box3-1small">
                <h3>Clicks</h3>
                <p>5.5M</p>
              </div>
              <div className="box3-1small">
                <h3>Sales</h3>
                <p>$1M</p>
              </div>
              <div className="box3-1small">
                <h3>Items</h3>
                <p>320</p>
              </div>
            </div>
          </div>
          <div className="box3-2">
            <div className="box3-2text">
              <h2>Eget est lorem ipsum</h2>
            </div>
            <div className="box3-2pic"></div>
          </div>
        </div>
      </div>
    </>
  );
}
