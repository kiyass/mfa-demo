import getBaseUrl from './getBaseUrl';
import registerMicroApps from './registerMicroApp';

/**
 * @description:
 * @param {*} appContainer App实例 <App />
 * @param {*} ReactDOM react-dom
 * @param {*} BrowserRouter BrowserRouter
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
  BrowserRouter,
  mountId = '#root',
  registerMicroAppsData,
  handleMount,
  handleUnMount,
  handleUpdate,
}) {
  let rootDom = null;
  let app = null;
  function render(props) {
    const { container, currentMicroAppRoute } = props;
    !!registerMicroAppsData &&
      registerMicroApps({
        registerMicroAppsData: registerMicroAppsData,
        currentMicroAppRoute: currentMicroAppRoute,
      });
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
          : document.querySelector(mountId),
      );
      app.render(App);
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
    handleUnMount?.(props);
  }

  if (!window.__POWERED_BY_QIANKUN__) {
    render({});
  }

  async function bootstrap() {}

  async function mount(props) {
    render(props);
    handleMount?.(props);
  }
  /**
   * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
   */
  async function update(props) {
    handleUpdate?.();
  }
  return { bootstrap, unmount, mount, update };
}
