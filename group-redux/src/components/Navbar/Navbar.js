import "./Navbar.css";
import React from "react";
import LoginIcon from "../Icons/LoginIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import DashboardIcon from "../Icons/DashboardIcon";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2 className="breakfastClub">Breakfast Club Crew</h2>
        <p className="bowl">🥣</p>
      </div>
      <div className="navbarLinks">
        <a className="link" href="http://localhost:3000/dashboard">
          <p className="linkTitle">Dashboard</p>
          <DashboardIcon />
        </a>

        <a className="link" href="http://localhost:3000/login">
          <p className="linkTitle">Login</p>
          <LoginIcon />
        </a>

        <a className="link" href="http://localhost:3000/">
          <p className="linkTitle">Logout</p>
          <LogoutIcon />
        </a>
      </div>
    </div>
  );
}
