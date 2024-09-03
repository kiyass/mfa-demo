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
  console.log(window.__app_require_packages__);
  if (window.__MICRO_APP_ENVIRONMENT__) {
    const { packages } = window.microApp.getGlobalData() || {};

    Object.keys(window.__app_require_packages__).forEach(pkg => {
      const item = window.__app_require_packages__[pkg];
      if (item.version === packages?.[pkg]?.version) {
        window[item.globalName] = packages[pkg].source;
      } else {
        loadScript(item.url);
      }
    });
  }
}
