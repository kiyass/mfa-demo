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
  return `https://esm.sh/${packageName}@${version}`;
}

export function getRequirePackages(externals, dependencies) {
  const result = {};
  const libraryManager = new LibraryManager();
  const libs = libraryManager.getLibs();
  Object.keys(externals).forEach(item => {
    result[item] = {
      globalName: externals[item],
      version: getVersion(dependencies[item]),
      url: libs[item].src,
    };
  });
  return JSON.stringify(result);
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

export function setLibs(libs) {
  const libraryManager = new LibraryManager();
  libraryManager.setLibs(libs);
}
