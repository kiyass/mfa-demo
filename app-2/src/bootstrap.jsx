import { startMicroApp } from "./lib";
import ReactDOM from "react-dom";
import App from "./App";

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
      ]);
    }, 2000);
  });
}
const registerMicroAppsData = await mock();
const { bootstrap, mount, unmount } = startMicroApp({
  appContainer: <App />,
  ReactDOM,
  mountId: "#app-2",
  registerMicroAppsData,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});

export { bootstrap, mount, unmount };
