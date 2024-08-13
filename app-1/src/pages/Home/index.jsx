import React, { useEffect, useState } from "react";
// import TestEditor from "../../examples/TestEditor";
import store from "./store";

import { a, getLib1InstanceId } from "mf3/utils";

const TestUtils = () => {
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
};

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsub = store.SubscribeToGlobalState("CounterApp", (state) => {
      setCount(state.CounterApp.global);
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

  const handleApp2Inc = () => {
    store.DispatchGlobalAction("App2", { type: "APP2_INCREMENT" });
  };

  const handleApp2Dec = () => {
    store.DispatchGlobalAction("App2", { type: "APP2_DECREMENT" });
  };

  return (
    <div style={{ padding: 20 }}>
      app-2 home get count: {count}{" "}
      <div style={{ padding: "20px 0" }}>
        <button onClick={handleInc}>INCREMENT_GLOBAL</button>{" "}
        <button onClick={handleDec}>DECREMENT_GLOBAL</button>
      </div>
      <div>
        <button onClick={handleApp2Inc}>APP2_INCREMENT</button>{" "}
        <button onClick={handleApp2Dec}>APP2_DECREMENT</button>
      </div>
      {/* <TestMf1 /> */}
      {/* <TestEditor /> */}
      <TestUtils />
    </div>
  );
};

export default Home;
