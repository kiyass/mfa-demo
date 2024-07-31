import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import startMicroApp from "micro-utils/startMicroApp";
import { name } from "../package.json";

startMicroApp({
  appContainer: <App />,
  BrowserRouter,
  ReactDOM,
  packageJsonName: name,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});
