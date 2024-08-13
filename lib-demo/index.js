function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.instanceId = getRandomInt(100000);
console.log(window.__MICRO_APP_NAME__, "window.__MICRO_APP_NAME__");
export function getLib1InstanceId() {
  console.log(window.__MICRO_APP_NAME__, window.instanceId, "appNamexxxx");
  return instanceId;
}
