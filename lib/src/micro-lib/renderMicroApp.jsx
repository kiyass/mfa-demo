/**
 * @description:
 * @param {*} name
 * @param {*} createElement React.createElement
 * @param {*} packageJsonName
 * @param {*} url
 * @param {*} path
 * @return {*}
 */
function renderMicroApp({ packageJsonName, createElement, name, url, path }) {
  return createElement(`micro-app-${packageJsonName}`, {
    name,
    url,
    baseroute: `/${window.__MICRO_APP_BASE_ROUTE__}/${path}`,
  });
}

export default renderMicroApp;
