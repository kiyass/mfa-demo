import { a, getLib1InstanceId } from "mf3/utils";
import React, { useEffect, useState } from "react";
import { createLifecycle } from "./createLifecycle";

// console.log(a);
const ModernReactComponent = (props) => {
  const [aS, setAS] = useState();
  const [aVal, setAVal] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    console.log("react 18 mount", props);
    return () => {
      console.log("react 18 unmount");
    };
  }, []);

  return (
    <div style={{ color: "#000" }}>
      <strong>React {React.version}</strong>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          a.value = Date.now();
          console.log("set a.value", a.value, getLib1InstanceId());
          setAS(a.value);
        }}
      >
        Set mf3 a.value: {aS}
      </button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setAVal(a.value);
        }}
      >
        Get mf3 a.value: {aVal}
      </button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setId(getLib1InstanceId());
        }}
      >
        Get window.instanceId: {id}
      </button>
    </div>
  );
};

export const lifecycle = createLifecycle(ModernReactComponent);

export default ModernReactComponent;
