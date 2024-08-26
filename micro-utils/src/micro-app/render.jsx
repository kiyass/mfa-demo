import { getMicroAppByName } from './apps';

/**
 * @description:
 * @param {*} name
 * @param {*} createElement React.createElement
 * @return {*}
 */
function MicroApp({ createElement, name, ...props }) {
  const appConfig = getMicroAppByName(name);

  console.log('appConfig', appConfig);

  if (!appConfig) {
    console.error(`Unable to find configuration for ${name}`);
    return;
  }

  const baseroute = window.__MICRO_APP_BASE_ROUTE__
    ? `${window.__MICRO_APP_BASE_ROUTE__}${appConfig.path}`
    : appConfig.path;

  return createElement('micro-app', {
    ...props,
    name,
    url: appConfig.url,
    baseroute,
    iframe: true,
  });
}

export default MicroApp;
