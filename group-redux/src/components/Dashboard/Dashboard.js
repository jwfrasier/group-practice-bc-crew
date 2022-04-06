import "./Dashboard.css";
import { useSelector } from "react-redux";

import React from "react";
import Employees from "../Employees/Employees";
import joePic from "../../assests/joe.png";
import jasonPic from "../../assests/jason.png";
import rayleighPic from "../../assests/rayleigh.png";
import santosPic from "../../assests/santos.png";
import ciaraPic from "../../assests/ciara.png";
import Navbar from "../Navbar/Navbar";

export default function Dashboard() {
  const employeeImages = [
    { img: joePic, name: "JavaScript-Joe" },
    { img: jasonPic, name: "JSON" },
    { img: rayleighPic, name: "Ray-nimation" },
    { img: santosPic, name: "San-🍞" },
    { img: ciaraPic, name: "Ci-SS" },
  ];
  return (
    <>
      <Navbar />
      <div className="dashboardContainer">
        <div className="textContent">
          <h2 className="userNameHeader header">Username:</h2>
          <p className="nameParagraph paragraph">Full name</p>
          <h2 className="emailHeader header">Email:</h2>
          <p className="emailParagraph paragraph">Email address</p>
        </div>
        <Employees employeeImages={employeeImages} />
      </div>
    </>
  );
}
