import React from "react";
import ReactDOM from "react-dom";
import { registerMicroApps, loadMicroApp, start } from "qiankun";

import App from "./App";
import "./public-path";
let flag = false;
function render(props) {
  const { container } = props;
  console.log(container, "container");
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
// export async function bootstrap() {
//   console.log("[react16] react app bootstraped");
// }

// export async function mount(props) {
//   console.log("[react16] props from main framework", props);
//   render(props);
// }

// export async function unmount(props) {
//   const { container } = props;
//   ReactDOM.unmountComponentAtNode(
//     container
//       ? container.querySelector("#root")
//       : document.querySelector("#root")
//   );
// }

if (!flag) {
  // loadMicroApp({
  //   name: "app-2-1",
  //   entry: "//localhost:8021",
  //   container: "#sub-app",
  // });

  console.log("xxx");
  registerMicroApps([
    {
      name: "app-2-1",
      entry: "//localhost:8021",
      container: "#sub-app",
      activeRule: window?.__POWERED_BY_QIANKUN_PARENT__
        ? "/app2/app-2-1"
        : "/app-2-1",
    },
  ]);
  // 启动 qiankun
  start();
  flag = true;
}
if (!window?.__POWERED_BY_QIANKUN_PARENT__) {
  render({});
}
