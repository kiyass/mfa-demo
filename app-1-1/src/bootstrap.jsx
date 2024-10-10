import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { startMicroApp } from "micro-utils/micro-app";
import { name } from "../package.json";

function render(basename, isStandAlone) {
  return (
    <BrowserRouter basename={isStandAlone ? "/" : basename}>
      <App />
    </BrowserRouter>
  );
}

startMicroApp({
  name,
  render,
});
