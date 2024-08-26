let microApps = [];

export function setMicroApps(apps) {
  console.log('apps', apps);
  microApps = apps;
}

export function getMicroApps() {
  return microApps;
}

export function getMicroAppsWithRoute() {
  console.log('microApps', microApps);
  return microApps.filter(item => !!item.path);
}

export function getMicroAppByName(name) {
  return microApps.find(item => item.name === name);
}
