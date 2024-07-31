import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import startMicroApp from "qiankun-utils/startMicroApp";

const registerMicroAppsData = [
  {
    name: "app-2-1",
    entry: "//localhost:8021",
    container: "#subapp-container",
    activeRule: "/app-2-1",
  },
  {
    name: "app-2-2",
    entry: "//localhost:8022",
    container: "#subapp-container",
    activeRule: "/app-2-2",
  },
];

const { bootstrap, mount, unmount } = startMicroApp({
  appContainer: <App />,
  ReactDOM,
  BrowserRouter,
  registerMicroAppsData,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});

export { bootstrap, mount, unmount };
