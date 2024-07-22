import ReactDOM from "react-dom";
import App from "./App";
import { lifecycles } from "./lib";

const { bootstrap, mount, unmount } = await lifecycles({
  appContainer: <App />,
  ReactDOM,
  mountId: "#app-2",
  registerMicroAppsData: [
    {
      name: "app-2-1",
      entry: "//localhost:8021",
      container: "#subapp-container",
      activeRule: "/app-2-1",
    },
  ],
});
export { bootstrap, mount, unmount };
