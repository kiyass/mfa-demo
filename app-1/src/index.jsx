// import { setPublicPath } from "micro-utils/publicPath";
// const publicPath = setPublicPath();
// if (publicPath) __webpack_public_path__ = publicPath;

if (window.__MICRO_APP_ENVIRONMENT__) {
  Object.assign(window, {
    GlobalStoreInstance: window.rawWindow.GlobalStoreInstance,
  });
}

if (window.__MICRO_APP_ENVIRONMENT__) {
  if (
    window.rawWindow.React?.version === window.__app_require_version__.react
  ) {
    window.React = window.rawWindow.React;
    window.ReactDOM = window.rawWindow.ReactDOM;
  } else {
    // TODO
  }
}

import("./bootstrap");
