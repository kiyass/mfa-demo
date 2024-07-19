import React, { useEffect } from "react";

const ModernReactComponent = (props) => {
  const { children, input } = props;

  useEffect(() => {
    console.log(4567);
  }, []);

  return (
    <div style={{ color: "#000" }}>
      <strong>
        This Component uses hooks, if loaded on localhost:3001, it should work,
        even though that host does not support React Hooks
      </strong>
      <br />
      <h2>Text form legacy React app: {input}</h2>
      {children}
    </div>
  );
};

export default ModernReactComponent;
