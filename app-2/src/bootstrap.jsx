import { lifecycles, registerMicroApps } from "./lib";
import ReactDOM from "react-dom";
import App from "./App";

const { bootstrap, mount, unmount, currentMicroAppRoute } = await lifecycles(
  <App />,
  ReactDOM,
  "#app-2"
);
// TODO fix get currentMicroAppRoute is null
registerMicroApps({
  registerMicroAppsData: [
    {
      name: "app-2-1",
      entry: "//localhost:8021",
      container: "#subapp-container",
      activeRule: "/app-2-1",
      props: {
        currentMicroAppRoute: currentMicroAppRoute
          ? `${currentMicroAppRoute}/app-2-1`
          : "/app-2-1",
      },
    },
  ],
  currentMicroAppRoute: currentMicroAppRoute,
});
export { bootstrap, mount, unmount };
