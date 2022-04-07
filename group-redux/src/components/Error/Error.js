import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <>
      <div className="error">
        <img
          className="garvey"
          src="https://images.viacbs.tech/uri/mgid:arc:imageassetref:comedycentral.com:da355bfd-b89e-4f7d-a6f7-c118135c5eba?quality=0.7"
        />
        <h1 className="four">404</h1>
      </div>
      <div className="bottom">
        <p>You done messed up A-A-Ron!</p>
        <p>Your page is insubordinate and churlish....</p>
        <p>
          <a href="homepage">Click here to get back to the main page</a>
        </p>
      </div>
    </>
  );
}
