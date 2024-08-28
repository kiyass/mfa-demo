import { GlobalStore } from "redux-micro-frontend";

let initialState = {
  global: 0,
};

const App1Reducer = (state = initialState, action) => {
  if (action.type === "APP1_INCREMENT")
    return { ...state, global: state.global + 1 };
  if (action.type === "APP1_DECREMENT")
    return { ...state, global: state.global - 1 };

  return state;
};

const store = GlobalStore.Get(false);

store.CreateStore("App1", App1Reducer, []);

store.RegisterGlobalActions("App1", ["APP1_INCREMENT", "APP1_DECREMENT"]);

export default store;
