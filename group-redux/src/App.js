import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reducers from "./reducers/index";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Dashboard from "./Dashboard/Dashboard";

const store = createStore(reducers, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <h1>Group Project</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<App />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
