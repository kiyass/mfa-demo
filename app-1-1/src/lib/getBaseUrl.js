/*
 *  Author:
 *  Description:
 */
export default function getBaseUrl(currentMicroAppRoute) {
  const baseUrl = window.__MICRO_APP_ENVIRONMENT__ ? currentMicroAppRoute : "/";
  return baseUrl;
}
