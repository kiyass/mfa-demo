import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import startMicroApp from "qiankun-utils/startMicroApp";
import App from "./App";

const { bootstrap, mount, unmount } = startMicroApp({
  appContainer: <App />,
  BrowserRouter,
  ReactDOM,
});
export { bootstrap, mount, unmount };
