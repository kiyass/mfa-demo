import { a, getLib1InstanceId } from "mf3/utils";
import React from "react";
import { createLifecycle } from "./createLifecycle";

const ModernReactComponent = (props) => {
  const { children, input } = props;

  return (
    <div style={{ color: "#000" }}>
      <h1>MF4</h1>
      <button
        onClick={() => {
          a.value = Date.now();
          console.log("app4 set a.value", a.value, getLib1InstanceId());
        }}
      >
        set
      </button>
      <button
        onClick={() => {
          console.log("app4 get a.value", a.value, getLib1InstanceId());
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
