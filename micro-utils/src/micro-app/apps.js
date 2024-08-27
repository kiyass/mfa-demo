let microApps = [];

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
