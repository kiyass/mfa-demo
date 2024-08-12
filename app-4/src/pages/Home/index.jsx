import TestMf2 from "mf2/Mf2";
import { a, getLib1InstanceId } from "mf3/utils";
import React, { useEffect, useState } from "react";
import store from "./store";
// import Home from "../components/Home";
// import RemoteComponent from "./RemoteComponent";

const TestMf1 = () => {
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
      <br />
      <TestMf1 />
      <TestMf2 />
    </div>
  );
};

export default Home;
