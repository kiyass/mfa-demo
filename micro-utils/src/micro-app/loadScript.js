function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(script);
  });
}
export default function initLoadScript() {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    if (
      window.rawWindow.React?.version === window.__app_require_version__.react
    ) {
      window.React = window.rawWindow.React;
      window.ReactDOM = window.rawWindow.ReactDOM;
    } else {
      loadScript('./libs/react.production.min.js');
      loadScript('./libs/react-dom.production.min.js');
    }
  }
}
