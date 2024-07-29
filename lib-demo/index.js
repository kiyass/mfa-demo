function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

window.instanceId = getRandomInt(100000);

export function getLib1InstanceId() {
  console.log(window.instanceId, window, window.appName, "appName");
  return instanceId;
}
