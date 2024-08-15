import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import startMicroApp from "micro-utils/startMicroApp";
import { name } from "../package.json";

startMicroApp({
  renderApp: (basename) => (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  ),
  preFetchApps: [
    { name: "app-1-1", url: process.env.PUBLIC_MICRO_APP1_1_URL },
    { name: "app-1-2", url: process.env.PUBLIC_MICRO_APP1_2_URL },
  ],
  ReactDOM,
  host: true,
  packageJsonName: name,
});
