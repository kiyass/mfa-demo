/*
 *  Author:
 *  Description:
 */

import { a, getLib1InstanceId } from "mf3/utils";
import Mf2 from "mf2/Mf2";
import RemoteComponent from "./RemoteComponent";
import React from "react";
import { createLifecycle } from "./createLifecycle";
export default function TestMf1() {
  return (
    <div style={{ margin: 100 }}>
      <button
        onClick={() => {
          console.log("getLib1InstanceId", getLib1InstanceId(), a.value);
        }}
      >
        xxx
      </button>
      <Mf2 />
    </div>
  );
}
export const lifecycle = createLifecycle(TestMf1);
