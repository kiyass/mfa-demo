import { getMicroAppByName, getTagName } from './apps';
import { useState, useEffect, createElement } from 'react';

let inited = window.__MICRO_APP_ENVIRONMENT__ ? false : true;

/**
 * @description:
 * @param {*} name
 * @return {*}
 */
function MicroApp({ name, ...props }) {
  const [visibled, setVisibled] = useState(inited);
  const appConfig = getMicroAppByName(name);
  const tagName = getTagName();

  useEffect(() => {
    if (visibled) return;

    const timer = setTimeout(() => {
      setVisibled(true);
      inited = true;
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, visibled);

  if (!appConfig) {
    console.error(`Unable to find configuration for ${name}`);
    return;
  }

  if (!visibled) {
    return <></>;
  }

  const baseroute = window.__MICRO_APP_BASE_ROUTE__
    ? `${window.__MICRO_APP_BASE_ROUTE__}${appConfig.path}`
    : appConfig.path;

  return createElement(tagName, {
    ...props,
    name,
    url: appConfig.url,
    baseroute,
  });
}

export default MicroApp;
