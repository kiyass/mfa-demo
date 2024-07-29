/*
 *  Author:
 *  Description:
 */
import { getLib1InstanceId } from "mf3/utils";
import React from "react";

export default () => {
  return (
    <div style={{ margin: 100 }}>
      <button
        onClick={() => {
          console.log(
            "getLib1InstanceId",
            getLib1InstanceId(),
            window.instanceId
          );
        }}
      >
        xxx
      </button>
    </div>
  );
};
