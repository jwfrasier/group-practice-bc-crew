import "./Navbar.css";

import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Breakfast Club Crew 🥣 </h2>
      <div className="navbarLinks">
        <a className="link" href="http://localhost:3000/">
          Login
        </a>
        <a className="link" href="http://localhost:3000/dashboard">
          Dashboard
        </a>
      </div>
    </div>
  );
}
