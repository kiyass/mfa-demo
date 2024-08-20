import React, { useEffect, useState } from "react";
import store from "./store";

const Home = () => {
  const [count, setCount] = useState(
    () => store.GetGlobalState()?.CounterApp?.global ?? 0
  );
  const [app4, setApp4] = useState(
    () => store.GetGlobalState()?.App4?.global ?? 0
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
    const unsub = store.SubscribeToGlobalState("App4", (state) => {
      setApp4(state.App4.global);
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

  const handleApp4Inc = () => {
    store.DispatchGlobalAction("App4", { type: "APP4_INCREMENT" });
  };

  const handleApp4Dec = () => {
    store.DispatchGlobalAction("App4", { type: "APP4_DECREMENT" });
  };

  return (
    <div style={{ padding: 20 }}>
      app-4 home get global count: {count} , app4 count: {app4}
      <div style={{ padding: "20px 0" }}>
        <button onClick={handleInc}>INCREMENT_GLOBAL</button>{" "}
        <button onClick={handleDec}>DECREMENT_GLOBAL</button>
      </div>
      <div>
        <button onClick={handleApp4Inc}>APP4_INCREMENT</button>{" "}
        <button onClick={handleApp4Dec}>APP4_DECREMENT</button>
      </div>
    </div>
  );
};

export default Home;
