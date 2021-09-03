import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "TOGGLETEXT": {
      return { ...state, showText: !state.showText };
    }
    default: {
      return state;
    }
  }
};
export default function UseReducerHook() {
  const [state, displatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div>
      <h1> Use Reducer Implementtion</h1>
      <h3>{state.count}</h3>
      <button
        onClick={() => {
          displatch({ type: "INCREMENT" });
          displatch({ type: "TOGGLETEXT" });
        }}
      >
        Increment Count{" "}
      </button>

      <h3>{state.showText && <span>Counter is ON</span>}</h3>
    </div>
  );
}
