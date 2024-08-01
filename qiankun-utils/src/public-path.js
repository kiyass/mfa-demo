export function setPublicPath() {
  if (window.__POWERED_BY_QIANKUN__) {
    return window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
}
