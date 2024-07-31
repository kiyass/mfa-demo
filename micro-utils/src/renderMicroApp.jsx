/**
 * @description:
 * @param {*} name
 * @param {*} createElement React.createElement
 * @param {*} packageJsonName
 * @param {*} url
 * @param {*} path
 * @return {*}
 */
function MicroApp({ packageJsonName, createElement, name, url, path }) {
  return createElement(`micro-app-${packageJsonName}`, {
    name,
    url,
    baseroute: window.__MICRO_APP_BASE_ROUTE__
      ? `${window.__MICRO_APP_BASE_ROUTE__}${path}`
      : path,
  });
}

export default MicroApp;
