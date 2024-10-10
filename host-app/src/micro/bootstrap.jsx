import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./store";

import { startMicroApp } from "micro-utils/micro-app";

const apps = [
  {
    name: "app-1",
    url: process.env.PUBLIC_MICRO_APP1_URL,
    path: "/app1",
    // prefetch: true,
  },
  {
    name: "app-4",
    url: process.env.PUBLIC_MICRO_APP4_URL,
    path: "/app4",
    // prefetch: true,
  },
];

function render(basename, isStandAlone) {
  console.log("render host app");
  return (
    <BrowserRouter basename={isStandAlone ? "/" : basename}>
      <App />
    </BrowserRouter>
  );
}

window.React = React;
window.ReactDOM = ReactDOM;

startMicroApp({
  render,
  apps,
});
