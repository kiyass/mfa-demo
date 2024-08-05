import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import startMicroApp from "micro-utils/startMicroApp";
import { name } from "../../package.json";
import "./store";

window.React = React;
window.ReactDOM = ReactDOM;
startMicroApp({
  appContainer: <App />,
  ReactDOM,
  host: true,
  BrowserRouter,
  packageJsonName: name,
});
