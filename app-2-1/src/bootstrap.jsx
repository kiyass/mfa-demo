import { startMicroApp } from "./lib";
import ReactDOM from "react-dom";
import App from "./App";

const { bootstrap, mount, unmount } = startMicroApp({
  appContainer: <App />,
  ReactDOM,
});
export { bootstrap, mount, unmount };
