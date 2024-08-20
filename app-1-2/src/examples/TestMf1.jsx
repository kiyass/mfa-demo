/*
 *  Author:
 *  Description:
 */

import { a, getLib1InstanceId } from "mf3/utils";
import React, { useState } from "react";
// import useDynamicImport from "../hooks/useDynamicImport";
// const { getLib1InstanceId, a } = await import("mf3/utils");

export default () => {
  const [id, setId] = useState();
  // const utils = useDynamicImport({ module: "utils", scope: "mf3" });
  return (
    <div style={{ margin: 60 }}>
      <button
        onClick={() => {
          console.log("getLib1InstanceId", getLib1InstanceId(), a.value);
          setId(getLib1InstanceId());
        }}
      >
        Get window.instanceId: {id}
      </button>
    </div>
  );
};
