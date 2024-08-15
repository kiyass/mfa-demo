import startMicroApp from "micro-utils/startMicroApp";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { name } from "../../package.json";
import App from "./App";
import "./store";

startMicroApp({
  renderApp: (basename) => (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  ),
  preFetchApps: [
    { name: "app-1", url: process.env.PUBLIC_MICRO_APP1_URL },
    { name: "app-4", url: process.env.PUBLIC_MICRO_APP4_URL },
  ],
  ReactDOM,
  host: true,
  packageJsonName: name,
});
