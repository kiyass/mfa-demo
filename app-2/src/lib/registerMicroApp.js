import { registerMicroApps as register, start } from "qiankun";

export default function registerMicroApps({
  registerMicroAppsData,
  currentMicroAppRoute,
}) {
  let flag = false;
  const data = registerMicroAppsData.map((item) => {
    return {
      ...item,
      activeRule: currentMicroAppRoute
        ? `${currentMicroAppRoute}${item.activeRule}`
        : item.activeRule,
      props: {
        currentMicroAppRoute: currentMicroAppRoute
          ? `${currentMicroAppRoute}${item.activeRule}`
          : item.activeRule,
        ...item.props,
      },
    };
  });
  if (!flag) {
    console.log(data, currentMicroAppRoute, 789);

    register(data);
    // 启动 qiankun
    start({ prefetch: false });
    flag = true;
  }
}
