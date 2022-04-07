import "./Navbar.css";
import React from "react";
import LoginIcon from "../Icons/LoginIcon";
import LogoutIcon from "../Icons/LogoutIcon";
import DashboardIcon from "../Icons/DashboardIcon";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Breakfast Club Crew 🥣 </h2>
      <div className="navbarLinks">
        <a className="link" href="http://localhost:3000/dashboard">
          Dashboard
          <DashboardIcon />
        </a>

        <a className="link" href="http://localhost:3000/login">
          Login
          <LoginIcon />
        </a>

        <a className="link" href="http://localhost:3000/">
          Logout
          <LogoutIcon />
        </a>
      </div>
    </div>
  );
}
