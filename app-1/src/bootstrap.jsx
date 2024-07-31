import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import startMicroApp from "lib/dist/es/startMicroApp";
import { name } from "../package.json";
// function mock() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         {
//           name: "app-2-1",
//           entry: "//localhost:8021",
//           container: "#subapp-container",
//           activeRule: "/app-2-1",
//         },
//         {
//           name: "app-2-2",
//           entry: "//localhost:8022",
//           container: "#subapp-container",
//           activeRule: "/app-2-2",
//         },
//       ]);
//     }, 20);
//   });
// }

startMicroApp({
  appContainer: <App />,
  ReactDOM,
  BrowserRouter,
  packageJsonName: name,
  handleMount: () => {
    console.log("handleMount");
  },
  handleUnMount: () => {
    console.log("handleUnMount");
  },
});
