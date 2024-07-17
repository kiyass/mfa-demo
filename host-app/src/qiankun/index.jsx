import { registerMicroApps, runAfterFirstMounted, start } from "qiankun";
import { renderApp } from "./App";

renderApp();

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: "app2",
      entry: "//localhost:3001",
      container: "#subapp",
      activeRule: "/app2",
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
