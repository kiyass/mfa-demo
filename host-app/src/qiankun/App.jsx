import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.scss";
import Header from "../components/AppBar";

const App = () => {
  return (
    <div className="content">
      <Header />
      <Routes>
        <Route exact path="/home" element={<div>home</div>} />
      </Routes>
      <div id="subapp"></div>
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
