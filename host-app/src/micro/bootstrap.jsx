import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import startMicroApp from "micro-utils/startMicroApp";
import { name } from "../../package.json";
import App from "./App";

import "./store";
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
