import { registerMicroApps, start } from "qiankun";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
// import "./public-path"; // 注意需要引入public-path

let flag = false;
let rootDom = null;

function render(props) {
  const { container } = props;
  rootDom = container
    ? container.querySelector("#app-2")
    : document.querySelector("#app-2");
  ReactDOM.render(
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN_PARENT__ ? "/app2" : "/"}
    >
      <App />
    </BrowserRouter>,
    rootDom
  );
}

if (!window.__POWERED_BY_QIANKUN_PARENT__) {
  render({});
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("react app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("props", props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(rootDom);
  rootDom = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update props", props);
}

console.log(
  "window.__POWERED_BY_QIANKUN_PARENT__",
  window.__POWERED_BY_QIANKUN_PARENT__
);

if (!flag) {
  registerMicroApps([
    {
      name: "app-2-1",
      entry: "//localhost:8021",
      container: "#subapp-container",
      activeRule: window.__POWERED_BY_QIANKUN_PARENT__
        ? "/app2/app-2-1"
        : "/app-2-1",
    },
  ]);
  // 启动 qiankun
  start({ prefetch: false });
  flag = true;
}
