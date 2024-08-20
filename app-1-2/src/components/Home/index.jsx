import React, { useEffect, useState } from "react";
import store from "./store";

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
      app-1-2 home get global count: {count} , app1 count: {app1}
      <div style={{ padding: "20px 0" }}>
        <button onClick={handleInc}>INCREMENT_GLOBAL</button>{" "}
        <button onClick={handleDec}>DECREMENT_GLOBAL</button>
      </div>
      <div>
        <button onClick={handleApp1Inc}>APP1_INCREMENT</button>{" "}
        <button onClick={handleApp1Dec}>APP1_DECREMENT</button>
      </div>
      {/* <TestMf1 /> */}
    </div>
  );
};

export default Home;
