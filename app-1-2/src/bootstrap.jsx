import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { name } from "../package.json";
import { startMicroApp } from "micro-utils/micro-app";

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
