import ReactDOM from "react-dom";
import App from "./App";
import { startMicroApp } from "./lib";
import microApp from "@micro-zoe/micro-app";

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
    }, 20);
  });
}

const { mount, unmount } = startMicroApp({
  appContainer: <App />,
  ReactDOM,
  // registerMicroAppsData,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});
window.mount = mount;
window.unmount = unmount;

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}

microApp.start({
  // 必须是以`micro-app-`开头的小写字母，例如：micro-app-b、micro-app-b-c
  tagName: "micro-app-app1",
  "router-mode": "native",
});
