import ReactDOM from "react-dom";
window.ReactDOM = ReactDOM;
import React from "react";
window.React = React;

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import startMicroApp from "micro-utils/startMicroApp";
import { name } from "../package.json";

startMicroApp({
  renderApp: (basename) => (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  ),
  ReactDOM,
  packageJsonName: name,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});
