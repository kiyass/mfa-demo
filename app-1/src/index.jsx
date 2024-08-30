import { initLoadScript } from "micro-utils/micro-app";
initLoadScript();

if (window.__MICRO_APP_ENVIRONMENT__) {
  Object.assign(window, {
    GlobalStoreInstance: window.rawWindow.GlobalStoreInstance,
  });
}
import("./bootstrap");
