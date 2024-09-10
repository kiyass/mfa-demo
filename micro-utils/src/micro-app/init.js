import { initLoadScript } from '../utils';

export default function init() {
  if (!window.__MICRO_APP_ENVIRONMENT__) {
    return;
  }

  Object.assign(window, {
    GlobalStoreInstance: window.rawWindow.GlobalStoreInstance,
  });

  const { packages } = window.microApp.getGlobalData() || {};
  initLoadScript(packages);
}
