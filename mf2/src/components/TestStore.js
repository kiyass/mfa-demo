import React, { useEffect, useState } from "react";
import store from "./store";

const TestStore = () => {
  const [count, setCount] = useState(
    () => store.GetGlobalState()?.Mf2?.global ?? 0
  );

  useEffect(() => {
    const unsub = store.SubscribeToGlobalState("Mf2", (state) => {
      setCount(state.Mf2.global);
    });
    return () => {
      unsub();
    };
  }, []);

  const handleInc = () => {
    store.DispatchGlobalAction("Mf2", { type: "MF2_INCREMENT" });
  };

  const handleDec = () => {
    store.DispatchGlobalAction("Mf2", { type: "MF2_DECREMENT" });
  };

  const handleGlobalInc = () => {
    store.DispatchGlobalAction("CounterApp", { type: "INCREMENT_GLOBAL" });
  };

  const handleGlobalDec = () => {
    store.DispatchGlobalAction("CounterApp", { type: "DECREMENT_GLOBAL" });
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <div>
        <p>count: {count}</p>
        <button onClick={handleInc}>MF2_INCREMENT</button>{" "}
        <button onClick={handleDec}>MF2_DECREMENT</button>
        <br />
        <button onClick={handleGlobalInc}>INCREMENT_GLOBAL</button>{" "}
        <button onClick={handleGlobalDec}>DECREMENT_GLOBAL</button>
      </div>
    </div>
  );
};

export default TestStore;
