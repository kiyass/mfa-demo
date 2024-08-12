import React from "react";
import { createLifecycle } from "./createLifecycle";
import { init, registerRemotes, loadRemote } from "@module-federation/runtime";

init({
  name: "mf2",
  remotes: [
    {
      name: "mf3",
      entry: "http://localhost:7003/remoteEntry.js",
    },
  ],
});

const ModernReactComponent = (props) => {
  const { children, input } = props;

  return (
    <div style={{ color: "#000" }}>
      <strong>
        This Component uses hooks, if loaded on localhost:3001, it should work,
        even though that host does not support React Hooks
      </strong>
      <button
        onClick={() => {
          // a.value = Date.now();
          // console.log("set a.value", window.__MICRO_APP_NAME__, a.value);

          loadRemote("mf3/utils").then((m) => {
            m.a.value = Date.now();
            console.log("set a.value", m.a.value, m.getLib1InstanceId());
          });
        }}
      >
        set
      </button>
      <button
        onClick={() => {
          // console.log("get a.value", window.__MICRO_APP_NAME__, a.value);

          loadRemote("mf3/utils").then((m) =>
            console.log("get a.value", m.a.value, m.getLib1InstanceId())
          );
        }}
      >
        get
      </button>
      <br />
      <h2>Text form legacy React app: {input}</h2>
      {children}
    </div>
  );
};

export const lifecycle = createLifecycle(ModernReactComponent);

export default ModernReactComponent;
