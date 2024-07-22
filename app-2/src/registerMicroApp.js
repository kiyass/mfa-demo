import { registerMicroApps as register, start } from "qiankun";

export default function registerMicroApps({
  registerMicroAppsData,
  currentMicroAppRoute,
}) {
  let flag = false;
  const data = registerMicroAppsData.map((item) => {
    return {
      ...item,
      activeRule: window.__POWERED_BY_QIANKUN_PARENT__
        ? `${currentMicroAppRoute}/app-2-1`
        : "/app-2-1",
    };
  });
  if (!flag) {
    register(data);
    // 启动 qiankun
    start({ prefetch: false });
    flag = true;
  }
}
