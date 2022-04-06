import "./Dashboard.css";

import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div>
        <h2 className="userNameHeader header">Username:</h2>
        <p className="nameParagraph paragraph">Full name</p>
        <h2 className="emailHeader header">Email:</h2>
        <p className="emailParagraph paragraph">Email address</p>
      </div>
    </div>
  );
}
