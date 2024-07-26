import { a } from "mf3/utils";
import React from "react";

// console.log(a);
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
          a.value = Date.now();
          console.log("set a.value", a.value);
        }}
      >
        set
      </button>
      <button onClick={() => console.log("get a.value", a.value)}>get</button>
      <br />
      <h2>Text form legacy React app: {input}</h2>
      {children}
    </div>
  );
};

export default ModernReactComponent;
