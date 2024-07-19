import React from "react";

const ModernReactComponent = (props) => {
  const { children, input } = props;
  return (
    <div>
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
