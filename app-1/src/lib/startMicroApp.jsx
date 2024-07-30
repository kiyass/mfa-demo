import { BrowserRouter } from "react-router-dom";
import getBaseUrl from "./getBaseUrl";
// import registerMicroApps from "./registerMicroApp";
if (window.__MICRO_APP_ENVIRONMENT__) {
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__;
}
/**
 * @description:
 * @param {*} appContainer App实例 <App />
 * @param {*} ReactDOM react-dom
 * @param {*} mountId "#root"
 * @param {*} registerMicroAppsData 微前端注册数据
 * @param {*} handleMount handleMount
 * @param {*} handleUnMount handleUnMount
 * @param {*} handleUpdate handleUpdate
 * @return {*}
 */
export default function startMicroApp({
  appContainer,
  ReactDOM,
  mountId = "#root",
  registerMicroAppsData,
  handleMount,
  handleUnMount,
}) {
  let rootDom = null;
  let app = null;
  function render() {
    // !!registerMicroAppsData &&
    //   registerMicroApps({
    //     registerMicroAppsData: registerMicroAppsData,
    //     currentMicroAppRoute: currentMicroAppRoute,
    //   });
    const App = (
      // <BrowserRouter basename={getBaseUrl(currentMicroAppRoute)}>
      <BrowserRouter basename={getBaseUrl(window.__MICRO_APP_BASE_ROUTE__)}>
        {appContainer}
      </BrowserRouter>
    );
    if (ReactDOM?.render) {
      rootDom = document.querySelector(mountId);

      ReactDOM.render(App, rootDom);
    } else {
      app = ReactDOM.createRoot(document.querySelector(mountId));
      app.render(App);
    }
  }
  async function unmount() {
    if (ReactDOM?.render) {
      const rootDom = document.querySelector(mountId);
      ReactDOM.unmountComponentAtNode(rootDom);
    } else {
      app.unmount();
      app = null;
    }
    handleUnMount?.();
  }

  async function mount() {
    render();
    handleMount?.();
  }

  return { unmount, mount };
}
