import { parse } from 'semver';
import { LibraryManager } from './LibraryManager';

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

export function getUrl(packageName, version) {
  // let src = undefined;

  // if (['react', 'react-dom'].includes(packageName)) {
  //   src = `https://unpkg.com/${packageName}@${version}/umd/${packageName}.development.js`;
  // } else if (['axios'].includes(packageName)) {
  //   src = `https://unpkg.com/${packageName}@${version}/dist/${packageName}.js`;
  // } else {
  //   src = `https://unpkg.com/${packageName}@${version}`;
  // }
  return `https://esm.sh/${packageName}@${version}`;
}

export function setRequiredVersion(externals, dependencies) {
  const requiredVersion = {};
  Object.keys(externals).forEach(item => {
    requiredVersion[item] = getVersion(dependencies[item]);
  });
  return requiredVersion;
}

export function initTags(externals) {
  const libraryManager = new LibraryManager();
  const libs = libraryManager.getLibs();
  return Object.keys(externals).map(item => {
    return {
      tag: 'script',
      attrs: { src: libs[item].src, exclude: true },
      head: true,
      publicPath: true,
    };
  });
}

export function getCopyLibs(externals) {
  const libraryManager = new LibraryManager();
  const libs = libraryManager.getLibs();
  return Object.keys(externals).map(item => {
    return {
      from: resolve(libs[item].from),
      to: resolve(libs[item].to),
    };
  });
}
