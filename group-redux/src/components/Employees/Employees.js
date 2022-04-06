import "./Employees.css";

import React from "react";

export default function Employees({ employeeImages }) {
  console.log();
  return (
    <div className="wholeContainer">
      <div className="employeeText">
        <h2>Need help?</h2>
        <h3>Contact one of our Tech Support Specialists</h3>
      </div>
      <div className="empContainer">
        <div className="employeesContainer">
          {employeeImages.map((employee) => (
            <div className="employeeContainer">
              <img className="employeeImage" src={employee.img} />
              <p className="employeeName">{employee.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
