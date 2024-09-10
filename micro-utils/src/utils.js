import { parse } from 'semver';

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(script);
  });
}

export const APP_REQUIRE_PACKAGES_KEY = '__app_require_packages__';

export function getVersion(versionRange) {
  // 获取主要版本号
  const majorVersion = parse(versionRange.replace(/^[^0-9]+/, ''))?.raw;
  return majorVersion;
}

export function getMajorVersion(versionRange) {
  // 获取主要版本号
  const majorVersion = semver.parse(versionRange.replace(/^[^0-9]+/, '')).major;
  return majorVersion;
}

export function initLoadScript(packages) {
  Object.keys(window[APP_REQUIRE_PACKAGES_KEY]).forEach(pkg => {
    const item = window[APP_REQUIRE_PACKAGES_KEY][pkg];
    if (window[item.globalName]) {
      return;
    }
    if (item.version === packages?.[pkg]?.version) {
      window[item.globalName] = packages[pkg].source;
    } else {
      loadScript(item.url);
    }
  });
}

export function getPackagesWithSource() {
  const packages = {};
  Object.keys(window[APP_REQUIRE_PACKAGES_KEY]).forEach(key => {
    const item = window[APP_REQUIRE_PACKAGES_KEY][key];
    packages[key] = {
      ...item,
      source: window[item.globalName],
    };
  });
  return packages;
}

export function getGlobalVariables(externals, dependencies, getLibSrc) {
  const obj = {};
  Object.keys(externals).forEach(item => {
    obj[item] = {
      globalName: externals[item],
      version: getVersion(dependencies[item]),
      url: getLibSrc(item),
    };
  });
  return `window.${APP_REQUIRE_PACKAGES_KEY}= ${JSON.stringify(obj)};`;
}
