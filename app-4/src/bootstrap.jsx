import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { startMicroApp } from "micro-utils/micro-app";
import { name } from "../package.json";

const apps = [
  {
    name: "app-1-1",
    url: process.env.PUBLIC_MICRO_APP1_1_URL,
    path: "/app-1-1",
    prefetch: true,
  },
  {
    name: "app-1-2",
    url: process.env.PUBLIC_MICRO_APP1_2_URL,
    path: "/app-1-2",
    prefetch: true,
  },
];

function render(basename, isStandAlone) {
  return (
    <BrowserRouter basename={isStandAlone ? "/" : basename}>
      <App />
    </BrowserRouter>
  );
}

startMicroApp({
  name,
  render,
  apps,
});
