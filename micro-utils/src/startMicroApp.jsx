import microApp from '@micro-zoe/micro-app';

/**
 * @description:
 * @param {*} renderApp App实例 <App />
 * @param {*} ReactDOM react-dom
 * @param {*} mountId "#root"
 * @param {*} host "是否为主应用"
 * @param {*} packageJsonName
 * @param {*} handleMount handleMount
 * @param {*} preFetchApps preFetchApps
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
  preFetchApps,
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
    console.log('iframeSrc', `${location.origin}/empty.html`);
    microApp.start({
      // tagName: `micro-app-${packageJsonName}`,
      disableScopecss: true,
      'router-mode': 'native',
      prefetchLevel: 1,
      preFetchApps: preFetchApps
        ? () =>
            preFetchApps.map(item => ({
              ...item,
              disableScopecss: true,
            }))
        : undefined,
      iframeSrc: `${location.origin}/empty.html`,
      lifeCycles: {
        created: (_, name) => {
          console.log('app status: ', name, 'created');
        },
        beforemount: (_, name) => {
          console.log('app status: ', name, 'beforemount');
        },
        mounted: (_, name) => {
          console.log('app status: ', name, 'mounted');
        },
        unmount: (_, name) => {
          console.log('app status: ', name, 'unmount');
        },
        error: (_, name) => {
          console.log('app status: ', name, 'error');
        },
      },
    });
  }
}
