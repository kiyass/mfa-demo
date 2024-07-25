/*
 *  Author:
 *  Description:
 */
import React, { useState, useEffect } from "react";
// import Mf1 from "mf1/Mf1";
import TestEcharts from "appx/TestEcharts";
import { a } from "mf3/utils";

export default () => {
  return (
    <div style={{ margin: 100 }}>
      <button
        onClick={() => {
          console.log(a.value, "app2");
        }}
      >
        xxx
      </button>
      {/* <Mf1 /> */}

      <TestEcharts />
    </div>
  );
};
