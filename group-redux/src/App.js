import "./App.css";
import { supabase, userSignUp, getExampleUser } from "./actions/supabase";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.log("user sign up", userSignUp("hi@hi.com", "1234"));
    console.log("get example user", getExampleUser());
  }, []);

  return (
    <div className="App">
      <h1>Group Project</h1>
    </div>
  );
}

export default App;
