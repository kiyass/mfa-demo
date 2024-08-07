import { GlobalStore } from "mf3/utils";

let initialState = {
  global: 0,
};

const App2Reducer = (state = initialState, action) => {
  if (action.type === "APP2_INCREMENT")
    return { ...state, global: state.global + 1 };
  if (action.type === "APP2_DECREMENT")
    return { ...state, global: state.global - 1 };

  return state;
};

const store = GlobalStore.Get(false);

store.CreateStore("App2", App2Reducer, []);

store.RegisterGlobalActions("App2", ["APP2_INCREMENT", "APP2_DECREMENT"]);

export default store;
