import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.scss";
import Header from "../components/AppBar";
import ChildApp from "./WujieReact";

const App = () => {
  return (
    <div className="content">
      <Header />
      <div id="subapp">
        <Routes>
          <Route exact path="/home" element={<div>home</div>} />
          <Route exact path="/app1" element={<ChildApp />} />
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
