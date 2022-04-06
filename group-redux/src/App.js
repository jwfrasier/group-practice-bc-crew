import "./App.css";
import { supabase, userSignUp, getExampleUser } from "./actions/supabase";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    const getUser = async () => {
      const data = await userSignUp("hi@hi.com", "1234");
      console.log(data);
    };
    getUser();
    // console.log("get example user", getExampleUser());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
