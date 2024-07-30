/*
 *  Author:
 *  Description:
 */
import { getLib1InstanceId, a } from "mf3/utils";
import React from "react";

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
