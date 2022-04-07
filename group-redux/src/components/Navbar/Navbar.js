import "./Navbar.css";
import React from "react";
import LoginIcon from "../Icons/LoginIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import DashboardIcon from "../Icons/DashboardIcon";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="bowl">🥣</p>
        <h2 className="breakfastClub"> Breakfast Club Crew</h2>
      </div>
      <div className="navbarLinks">
        <a className="link" href="http://localhost:3000/dashboard">
          <div className="iconWrapper">
            <DashboardIcon />
          </div>
          <p className="linkTitle">Dashboard</p>
        </a>

        <a className="link" href="http://localhost:3000/login">
          <div className="iconWrapper">
            <LoginIcon />
          </div>
          <p className="linkTitle">Login</p>
        </a>

        <a className="link" href="http://localhost:3000/">
          <div className="iconWrapper">
            <LogoutIcon />
          </div>
          <p className="linkTitle">Logout</p>
        </a>
      </div>
    </div>
  );
}
