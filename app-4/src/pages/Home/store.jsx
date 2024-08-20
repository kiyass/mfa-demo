import { GlobalStore } from "mf3/utils";

let initialState = {
  global: 0,
};

const App4Reducer = (state = initialState, action) => {
  if (action.type === "APP4_INCREMENT")
    return { ...state, global: state.global + 1 };
  if (action.type === "APP4_DECREMENT")
    return { ...state, global: state.global - 1 };

  return state;
};

const store = GlobalStore.Get(false);

store.CreateStore("App4", App4Reducer, []);

store.RegisterGlobalActions("App4", ["APP4_INCREMENT", "APP4_DECREMENT"]);

export default store;
