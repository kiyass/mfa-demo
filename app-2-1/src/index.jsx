import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./public-path";

let app = null;

function render(props) {
  const { container } = props;
  console.log("app-2 render");
  app = createRoot(
    container
      ? container.querySelector("#app-2-1")
      : document.querySelector("#app-2-1")
  );

  app.render(<App />);
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
  app.unmount();
  app = null;
}
