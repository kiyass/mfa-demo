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
        ? `${currentMicroAppRoute}${item.activeRule}`
        : item.activeRule,
    };
  });
  if (!flag) {
    console.log(data, 789);
    register(data);
    // 启动 qiankun
    start({ prefetch: false });
    flag = true;
  }
}
