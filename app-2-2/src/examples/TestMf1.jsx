/*
 *  Author:
 *  Description:
 */

import React from "react";
const { getLib1InstanceId, a } = await import("mf3/utils");

export default () => {
  return (
    <div style={{ margin: 100 }}>
      <button
        onClick={() => {
          console.log("getLib1InstanceId", getLib1InstanceId(), a.value);
        }}
      >
        xxx
      </button>
    </div>
  );
};
