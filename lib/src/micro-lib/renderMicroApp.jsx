/*
 *  Author:
 *  Description:
 */
/*
 *  Author:
 *  Description:
 */
import { createElement } from 'react';

/**
 * @description:
 * @param {*} name
 * @param {*} packageJsonName
 * @param {*} url
 * @param {*} path
 * @return {*}
 */
export function renderMicroApp({ packageJsonName, name, url, path }) {
  return createElement(`micro-app-${packageJsonName}`, {
    name,
    url,
    baseroute: `/${window.__MICRO_APP_BASE_ROUTE__}/${path}`,
  });
}
