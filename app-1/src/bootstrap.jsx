import ReactDOM from "react-dom";
window.ReactDOM = ReactDOM;
import React from "react";
window.React = React;

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import startMicroApp from "micro-utils/startMicroApp";
import { name } from "../package.json";
console.log(window.React, "mmmmm");
startMicroApp({
  renderApp: (basename) => (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  ),
  ReactDOM,
  host: true,
  packageJsonName: name,
});
