/*
 *  Author:
 *  Description:
 */

import { a, getLib1InstanceId } from "mf3/utils";
// import Home from "../components/Home";
import React from "react";
// import RemoteComponent from "./RemoteComponent";

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
      {/* <RemoteComponent module="Mf1" scope="mf1" key="mf2" /> */}
      {/* <Home /> */}
    </div>
  );
};
