import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./public-path";
function render(props) {
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

import { registerMicroApps, start } from "qiankun";

console.log(
  "window.__POWERED_BY_QIANKUN_PARENT__",
  window.__POWERED_BY_QIANKUN_PARENT__
);

registerMicroApps([
  {
    name: "app-2-1",
    entry: "//localhost:8021",
    container: "#sub-app-container",
    activeRule: window.__POWERED_BY_QIANKUN_PARENT__
      ? "/app2/app-2-1"
      : "/app-2-1",
  },
]);
// 启动 qiankun
start();
