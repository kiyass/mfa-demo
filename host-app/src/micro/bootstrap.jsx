import { renderApp } from "./App";
import microApp from "@micro-zoe/micro-app";
import "./store";

microApp.start({
  "router-mode": "native", // 所有子应用都设置为native模式
});

renderApp();
