import "./App.css";
import { supabase, userSignUp, userSignIn } from "./actions/supabase";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login/Login";

function App() {
  //replace these variables with state variables (email,pass)
  let email = "hi@hi.com";
  let password = "123456";
  useEffect(() => {
    const signIn = async () => {
      const data = await userSignIn(email, password);
      console.log(data);
    };
    signIn();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
