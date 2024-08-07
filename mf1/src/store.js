/*
 *  Author:
 *  Description:
 */
import { GlobalStore } from "mf3/utils";

let initialState = {
  global: 0,
};

const Mf2Reducer = (state = initialState, action) => {
  if (action.type === "MF2_INCREMENT")
    return { ...state, global: state.global + 1 };
  if (action.type === "MF2_DECREMENT")
    return { ...state, global: state.global - 1 };

  return state;
};

const store = GlobalStore.Get(false);

store.CreateStore("Mf2", Mf2Reducer, []);

store.RegisterGlobalActions("Mf2", ["MF2_INCREMENT", "MF2_DECREMENT"]);

export default store;
