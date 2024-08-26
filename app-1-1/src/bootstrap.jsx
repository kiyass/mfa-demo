import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { startMicroApp } from "micro-utils/micro-app";

function renderApp(basename, isStandAlone) {
  return (
    <BrowserRouter basename={isStandAlone ? "/" : basename}>
      <App />
    </BrowserRouter>
  );
}

startMicroApp({
  renderApp,
  ReactDOM,
});
