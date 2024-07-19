import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./public-path";

let rootDom = null;

function render(props) {
  const { container } = props;
  rootDom = container
    ? container.querySelector("#root")
    : document.querySelector("#root");

  ReactDOM.render(<App />, rootDom);
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
  ReactDOM.unmountComponentAtNode(rootDom);
  rootDom = null;
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update props", props);
}
