import startMicroApp from "micro-utils/startMicroApp";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { name } from "../package.json";
import App from "./App";

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
