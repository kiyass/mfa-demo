/*
 *  Author:
 *  Description:
 */
import { store } from "mf3/utils";

// let initialState = {
//   global: 0,
//   local: 0,
//   todo: 0,
// };

// const CounterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT_GLOBAL")
//     return { ...state, global: state.global + 1 };
//   if (action.type === "DECREMENT_GLOBAL")
//     return { ...state, global: state.global - 1 };

//   if (action.type === "INCREMENT_LOCAL")
//     return { ...state, local: state.local + 1 };
//   if (action.type === "DECREMENT_LOCAL")
//     return { ...state, local: state.local - 1 };

//   if (action.type === "ADD_TODO") return { ...state, todo: state.todo + 1 };
//   if (action.type === "REMOVE_TODO") return { ...state, todo: state.todo - 1 };

//   return state;
// };

// const store = GlobalStore.Get(false);

// store.CreateStore("CounterApp", CounterReducer, []);

// store.RegisterGlobalActions("CounterApp", [
//   "INCREMENT_GLOBAL",
//   "DECREMENT_GLOBAL",
//   "ADD_TODO",
//   "REMOVE_TODO",
// ]);

export default store;
