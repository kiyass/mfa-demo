/*
 *  Author:
 *  Description:
 */
import Mf2 from "mf2/Mf2";
import React from "react";
// import TestEcharts from "appx/TestEcharts";
import { getLib1InstanceId } from "mf3/utils";

export default () => {
  return (
    <div style={{ margin: 100 }}>
      <button
        onClick={() => {
          console.log("getLib1InstanceId", getLib1InstanceId());
        }}
      >
        xxx
      </button>
      <Mf2 />
      {/* <Mf1 /> */}

      {/* <TestEcharts /> */}
    </div>
  );
};
