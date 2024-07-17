import { setupApp } from "wujie";
import { renderApp } from "./App";
import { lifecycles } from "./lifecycles";

setupApp({
  name: "app1",
  url: "//localhost:2001",
  exec: true,
  sync: true,
  ...lifecycles,
});

renderApp();
