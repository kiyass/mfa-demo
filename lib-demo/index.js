function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const instanceId = getRandomInt(100000);
window.instanceId = instanceId;
console.log(window.__MICRO_APP_NAME__, "window.__MICRO_APP_NAME__");
export function getLib1InstanceId() {
  console.log(
    window.__MICRO_APP_NAME__,
    instanceId,
    window.instanceId,
    "appNamexxxx"
  );
  return instanceId;
}
