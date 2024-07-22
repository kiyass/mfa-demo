import {
  registerMicroApps,
  runAfterFirstMounted,
  start,
  initGlobalState,
} from "qiankun";
import { renderApp } from "./App";

renderApp();

/**
 * Step2 注册子应用
 */

// 初始化 state
// const actions = initGlobalState({

// });

// actions.onGlobalStateChange((state, prev) => {
//   // state: 变更后的状态; prev 变更前的状态
//   console.log(state, prev);
// });
// actions.setGlobalState(state);
// actions.offGlobalStateChange();
window.__POWERED_BY_QIANKUN_PARENT__ = true;

registerMicroApps(
  [
    {
      name: "app2",
      entry: "//localhost:3001",
      container: "#subapp",
      activeRule: "/app2",
      props: {
        currentMicroAppRoute: "/app2",
      },
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log("[LifeCycle] before load %c%s", "color: green;", app.name);
      },
    ],
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  }
);

// const { onGlobalStateChange, setGlobalState } = initGlobalState({
//   user: "qiankun",
// });

// onGlobalStateChange((value, prev) =>
//   console.log("[onGlobalStateChange - master]:", value, prev)
// );

// setGlobalState({
//   ignore: "master",
//   user: {
//     name: "master",
//   },
// });

// setDefaultMountApp("/app1");

/**
 * Step4 启动应用
 */
// start({
//   sandbox: false,
// });

start();

runAfterFirstMounted(() => {
  console.log("[HostApp] first app mounted");
});

// window.onbeforeunload = () => {
//   console.log("in");
//   debugger;
// };

// window.onunload = () => {
//   console.log("in");
//   debugger;
// };
