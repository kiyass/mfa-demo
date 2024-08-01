import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.scss";
import Header from "../components/AppBar";

const App = () => {
  return (
    <div className="content">
      <Header />
      <div id="subapp">
        <Routes>
          <Route exact path="/home" element={<div>home</div>} />
          <Route
            exact
            path="/app1/*"
            element={
              <micro-app
                name="app-1"
                url={process.env.PUBLIC_MICRO_APP1_URL}
                baseroute="/app1"
              />
            }
          />
          <Route
            exact
            path="/app4/*"
            element={
              <micro-app
                name="app-4"
                url={process.env.PUBLIC_MICRO_APP4_URL}
                baseroute="/app4"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
