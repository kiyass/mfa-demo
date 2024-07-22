/*
 *  Author:
 *  Description:
 */
import { BrowserRouter } from "react-router-dom";
import getBaseUrl from "./getBaseUrl";

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

/**
 * @description:
 * @param {*} appContainer App实例 <App />
 * @param {*} ReactDOM react-dom
 * @param {*} mountId "#root"
 * @return {*}
 */
export default function lifecycles(appContainer, ReactDOM, mountId = "#root") {
  let rootDom = null;
  let app = null;
  let currentMicroAppRoute = null;
  function render(props) {
    const { container, currentMicroAppRoute: route } = props;
    currentMicroAppRoute = route;
    console.log(currentMicroAppRoute, "currentMicroAppRoute");
    const App = (
      <BrowserRouter basename={getBaseUrl(currentMicroAppRoute)}>
        {appContainer}
      </BrowserRouter>
    );
    if (ReactDOM?.render) {
      rootDom = container
        ? container.querySelector(mountId)
        : document.querySelector(mountId);

      ReactDOM.render(App, rootDom);
    } else {
      app = ReactDOM.createRoot(
        container
          ? container.querySelector(mountId)
          : document.querySelector(mountId)
      );
      app.render(App, rootDom);
    }
  }
  async function unmount(props) {
    if (ReactDOM?.render) {
      const { container } = props;
      const rootDom = container
        ? container.querySelector(mountId)
        : document.querySelector(mountId);
      ReactDOM.unmountComponentAtNode(rootDom);
    } else {
      app.unmount();
      app = null;
    }
  }

  if (!window.__POWERED_BY_QIANKUN_PARENT__) {
    render({});
  }

  async function bootstrap() {}

  async function mount(props) {
    render(props);
  }
  /**
   * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
   */
  async function update(props) {}
  return { bootstrap, unmount, mount, update, currentMicroAppRoute };
}
