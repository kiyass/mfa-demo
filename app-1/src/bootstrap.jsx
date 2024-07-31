import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import startMicroApp from "lib/dist/es/micro-lib/startMicroApp";
import { name } from "../package.json";

startMicroApp({
  appContainer: <App />,
  ReactDOM,
  BrowserRouter,
  packageJsonName: name,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});
