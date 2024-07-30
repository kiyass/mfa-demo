/*
 *  Author:
 *  Description:
 */
import useDynamicImport from "../hooks/useDynamicImport";
import React from "react";

export default () => {
  const { getLib1InstanceId, a } =
    useDynamicImport({
      module: "utils",
      scope: "mf3",
    }) ?? {};
  console.log(getLib1InstanceId, a, "getLib1InstanceId, a");
  if (getLib1InstanceId && a) {
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
  }
  return <></>;
};
