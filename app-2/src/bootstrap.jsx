import ReactDOM from "react-dom";
import App from "./App";
import { startMicroApp } from "./lib";

function mock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, 200);
  });
}
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
  registerMicroAppsData,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});

export { bootstrap, mount, unmount };
