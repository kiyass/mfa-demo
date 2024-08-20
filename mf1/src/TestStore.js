/*
 *  Author:
 *  Description:
 */
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

  return (
    <div>
      <p>mf2 count: {count}</p>
      <button onClick={handleInc}>MF2_INCREMENT</button>{" "}
      <button onClick={handleDec}>MF2_DECREMENT</button>
    </div>
  );
};

export default TestStore;
