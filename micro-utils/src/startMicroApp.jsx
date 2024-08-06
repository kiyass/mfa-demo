import microApp from '@micro-zoe/micro-app';

/**
 * @description:
 * @param {*} renderApp App实例 <App />
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
  renderApp,
  ReactDOM,
  host = false,
  mountId = '#root',
  handleMount,
  packageJsonName,
  handleUnMount,
}) {
  let rootDom = null;
  let app = null;
  function render() {
    const App = renderApp(window.__MICRO_APP_BASE_ROUTE__ || '/');
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
