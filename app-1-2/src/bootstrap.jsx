import { startMicroApp } from "./lib";
import ReactDOM from "react-dom";
import App from "./App";

const { mount, unmount } = startMicroApp({
  appContainer: <App />,
  ReactDOM,
});
window.mount = mount;
window.unmount = unmount;

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}
