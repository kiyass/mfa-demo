/*
 *  Author:
 *  Description:
 */

import React from "react";
import { getLib1InstanceId, a } from "mf3/utils";
// const { getLib1InstanceId, a } = await import("mf3/utils");

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
