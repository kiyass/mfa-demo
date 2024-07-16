import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../App.css";
import Header from "../components/AppBar";

const App = () => {
  return (
    <div className="content">
      <Header />
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
