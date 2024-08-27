import { parse } from 'semver';

export function getMajorVersion(versionRange) {
  // 获取主要版本号
  const majorVersion = parse(versionRange.replace(/^[^0-9]+/, ''))?.raw;
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
