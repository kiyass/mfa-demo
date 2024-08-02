import { a } from "mf3/utils";
import React, { useEffect } from "react";
import { createLifecycle } from "./createLifecycle";
import { Route, Routes, useLocation } from "react-router-dom";

// console.log(a);
const ModernReactComponent = (props) => {
  useEffect(() => {
    console.log("react 18 mount", props);
    return () => {
      console.log("react 18 unmount");
    };
  }, []);

  return (
    <div style={{ color: "#000" }}>
      <strong>react 18</strong>
      <button
        onClick={() => {
          a.value = Date.now();
          console.log("set a.value", a.value);
        }}
      >
        set
      </button>
      <button onClick={() => console.log("get a.value", a.value)}>get</button>
    </div>
  );
};

export const lifecycle = createLifecycle(ModernReactComponent);

export default ModernReactComponent;
