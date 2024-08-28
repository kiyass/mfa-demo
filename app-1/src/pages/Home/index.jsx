import React, { useEffect, useState } from "react";
// import TestEditor from "../../examples/TestEditor";
import store from "./store";

import { Button } from "@material-ui/core";
// import { a, getLib1InstanceId } from "mf3/utils";

// const TestUtils = () => {
//   const [id, setId] = useState();

//   return (
//     <>
//       <div style={{ marginTop: 60 }}>
//         <button
//           onClick={() => {
//             console.log("getLib1InstanceId", getLib1InstanceId(), a.value);
//             setId(getLib1InstanceId());
//           }}
//         >
//           Get window.instanceId: {id}
//         </button>
//       </div>
//     </>
//   );
// };

const TestCss = () => {
  return (
    <div style={{ marginTop: 60 }}>
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="contained" color="primary" style={{ marginLeft: 20 }}>
        Contained
      </Button>
      <Button variant="outlined" color="primary" style={{ marginLeft: 20 }}>
        Outlined
      </Button>
    </div>
  );
};

const Home = () => {
  const [count, setCount] = useState(
    () => store.GetGlobalState()?.CounterApp?.global ?? 0
  );
  const [app1, setApp1] = useState(
    () => store.GetGlobalState()?.App1?.global ?? 0
  );

  useEffect(() => {
    const unsub = store.SubscribeToGlobalState("CounterApp", (state) => {
      setCount(state.CounterApp.global);
    });
    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const unsub = store.SubscribeToGlobalState("App1", (state) => {
      setApp1(state.App1.global);
    });
    return () => {
      unsub();
    };
  }, []);

  const handleInc = () => {
    store.DispatchGlobalAction("CounterApp", { type: "INCREMENT_GLOBAL" });
  };

  const handleDec = () => {
    store.DispatchGlobalAction("CounterApp", { type: "DECREMENT_GLOBAL" });
  };

  const handleApp1Inc = () => {
    store.DispatchGlobalAction("App1", { type: "APP1_INCREMENT" });
  };

  const handleApp1Dec = () => {
    store.DispatchGlobalAction("App1", { type: "APP1_DECREMENT" });
  };

  return (
    <div style={{ padding: 20 }}>
      app-1 home get global count: {count} , app1 count: {app1}
      <div style={{ padding: "20px 0" }}>
        <button onClick={handleInc}>INCREMENT_GLOBAL</button>{" "}
        <button onClick={handleDec}>DECREMENT_GLOBAL</button>
      </div>
      <div>
        <button onClick={handleApp1Inc}>APP1_INCREMENT</button>{" "}
        <button onClick={handleApp1Dec}>APP1_DECREMENT</button>
      </div>
      {/* <TestMf1 /> */}
      {/* <TestEditor /> */}
      {/* <TestUtils /> */}
      <TestCss />
    </div>
  );
};

export default Home;
