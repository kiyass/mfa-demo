let microApps = [];
let tagName = 'micro-app';

export function getTagName() {
  return tagName;
}

export function setTagName(name) {
  tagName = `micro-app-${name}`;
  return tagName;
}

export function setMicroApps(apps) {
  microApps = apps;
}

export function getMicroApps() {
  return microApps;
}

export function getMicroAppsWithRoute() {
  return microApps.filter(item => !!item.path);
}

export function getMicroAppByName(name) {
  return microApps.find(item => item.name === name);
}
