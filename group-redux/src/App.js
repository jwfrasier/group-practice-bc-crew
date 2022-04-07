import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";

function App() {
  // comment
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
