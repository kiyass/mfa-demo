import { setPublicPath } from "micro-utils/publicPath";
const publicPath = setPublicPath();
if (publicPath) __webpack_public_path__ = publicPath;

if (window.__MICRO_APP_ENVIRONMENT__) {
  Object.assign(window, {
    GlobalStoreInstance: window.rawWindow.GlobalStoreInstance,
  });
}

import("./bootstrap");
