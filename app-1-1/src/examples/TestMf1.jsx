/*
 *  Author:
 *  Description:
 */

import { a, getLib1InstanceId } from "mf3/utils";
import RemoteComponent from "./RemoteComponent";
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
      <RemoteComponent module="Mf1" scope="mf1" />
    </div>
  );
};
