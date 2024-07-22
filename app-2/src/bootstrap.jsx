import lifecycles from "./lifecycles";
import ReactDOM from "react-dom";
import App from "./App";
import registerMicroApps from "./registerMicroApp";

const { bootstrap, mount, unmount } = lifecycles(<App />, ReactDOM, "#app-2");
registerMicroApps({
  registerMicroAppsData: [
    {
      name: "app-2-1",
      entry: "//localhost:8021",
      container: "#subapp-container",
      activeRule: "/app-2-1",
    },
  ],
  currentMicroAppRoute: "/app2",
});

export { bootstrap, mount, unmount };
