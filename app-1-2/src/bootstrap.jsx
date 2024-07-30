import ReactDOM from "react-dom";
import App from "./App";
import { startMicroApp } from "./lib";
import { name } from "../package.json";

startMicroApp({
  appContainer: <App />,
  ReactDOM,
  packageJsonName: name,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});
