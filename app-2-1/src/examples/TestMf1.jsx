import React from "react";
// import Mf1 from "mf1/Mf1";
import { getLib1InstanceId } from "mf3/utils";
// webopack mf1 16   , shareScorpe 18
export default () => {
  return (
    <div style={{ margin: 100, color: "#000" }}>
      <button
        onClick={() => {
          // a.value = 4;
          console.log("getLib1InstanceId", getLib1InstanceId());
        }}
      >
        MF1
      </button>
      {/* <Mf1 /> */}
    </div>
  );
};
