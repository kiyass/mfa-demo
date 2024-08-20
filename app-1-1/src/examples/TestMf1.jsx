/*
 *  Author:
 *  Description:
 */

import { a, getLib1InstanceId } from "mf3/utils";
import React, { useState } from "react";
import RemoteComponent from "./RemoteComponent";

export default () => {
  const [id, setId] = useState();

  return (
    <>
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
      <RemoteComponent module="Mf1" scope="mf1" key="mf2" />
    </>
  );
};
