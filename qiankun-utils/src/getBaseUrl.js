export default function getBaseUrl(currentMicroAppRoute) {
  const baseUrl = window.__POWERED_BY_QIANKUN__ ? currentMicroAppRoute : '/';
  return baseUrl;
}
