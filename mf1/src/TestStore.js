/*
 *  Author:
 *  Description:
 */
import React, { useEffect, useState } from "react";
import store from "./store";

const TestStore = () => {
  const [count, setCount] = useState(0);

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

  return (
    <div style={{ padding: 20 }}>
      <div>
        <p>count: {count}</p>
        <button onClick={handleInc}>MF2_INCREMENT</button>{" "}
        <button onClick={handleDec}>MF2_DECREMENT</button>
      </div>
    </div>
  );
};

export default TestStore;
