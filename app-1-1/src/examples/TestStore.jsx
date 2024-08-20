import { GlobalStore } from "mf3/utils";
import React, { useEffect, useState } from "react";

const store = GlobalStore.Get(false);

const TestStore = () => {
  const [count, setCount] = useState(
    () => store.GetGlobalState()?.CounterApp?.global ?? 0
  );

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

  return (
    <div style={{ padding: 20 }}>
      app-1-1 get count: {count}{" "}
      <div style={{ padding: "20px 0" }}>
        <button onClick={handleInc}>INCREMENT_GLOBAL</button>{" "}
        <button onClick={handleDec}>DECREMENT_GLOBAL</button>
      </div>
    </div>
  );
};

export default TestStore;
