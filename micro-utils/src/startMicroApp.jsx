import microApp from '@micro-zoe/micro-app';

/**
 * @description:
 * @param {*} appContainer App实例 <App />
 * @param {*} ReactDOM react-dom
 * @param {*} mountId "#root"
 * @param {*} host "是否为主应用"
 * @param {*} packageJsonName
 * @param {*} handleMount handleMount
 * @param {*} handleUnMount handleUnMount
 * @param {*} handleUpdate handleUpdate
 * @return {*}
 */
export default function startMicroApp({
  appContainer,
  ReactDOM,
  host = false,
  BrowserRouter,
  mountId = '#root',
  handleMount,
  packageJsonName,
  handleUnMount,
}) {
  let rootDom = null;
  let app = null;
  let CunstomRouter = BrowserRouter;
  function render() {
    const App = (
      <CunstomRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
        {appContainer}
      </CunstomRouter>
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
      CunstomRouter = null;
      app.unmount();
      app = null;
    }
    handleUnMount?.();
  }

  async function mount() {
    render();
    handleMount?.();
  }

  window.mount = mount;
  window.unmount = unmount;

  if (!window.__MICRO_APP_ENVIRONMENT__) {
    window.mount();
  }
  if (host) {
    microApp.start({
      tagName: `micro-app-${packageJsonName}`,
      disableScopecss: true,
      'router-mode': 'native',
    });
  }
}
