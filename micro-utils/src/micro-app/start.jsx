import microApp from '@micro-zoe/micro-app';
import { setMicroApps } from './apps';
import { getPackagesWithSource } from '../utils';

/**
 * @description:
 * @param {*} renderApp App实例 <App />
 * @param {*} apps 微应用列表
 * @param {*} ReactDOM react-dom
 * @param {*} mountId "#root"
 * @param {*} lifeCycles lifeCycles
 * @return {*}
 */
export default function startMicroApp({
  renderApp,
  apps,
  ReactDOM,
  mountId = '#root',
  lifeCycles,
}) {
  let rootDom = null;
  let app = null;

  if (apps?.length) {
    setMicroApps(apps); // 必须在 mount 之前执行
  }

  async function mount(isStandAlone = false) {
    const App = renderApp(window.__MICRO_APP_BASE_ROUTE__ || '/', isStandAlone);
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
  }

  window.mount = mount;
  window.unmount = unmount;

  if (!window.__MICRO_APP_ENVIRONMENT__) {
    window.mount(true);
  }

  if (apps?.length) {
    const disableScopecss = true;

    const preFetchApps = apps
      .filter(item => !!item.prefetch)
      .map(item => ({
        name: item.name,
        url: item.url,
        disableScopecss,
      }));

    microApp.setGlobalData({
      packages: getPackagesWithSource(),
    });

    microApp.start({
      disableScopecss,
      'router-mode': 'native',
      iframe: true,
      prefetchLevel: 1,
      preFetchApps: preFetchApps,
      lifeCycles,
    });
  }
}
