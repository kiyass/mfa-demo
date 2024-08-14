/*
 *  Author:
 *  Description:
 */
export default function getUrl(packageName, version) {
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
