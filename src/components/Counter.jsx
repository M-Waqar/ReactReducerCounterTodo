import React, { useReducer } from "react";

const ACTIONS = {
  INC: "INCREMENT",
  DEC: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INC:
      return { count: state.count + 1 };
    case ACTIONS.DEC:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="row p-5">
      <div className="col-1 offset-3">
        <button
          className="btn btn-primary mr-3"
          onClick={() => dispatch({ type: ACTIONS.INC })}
        >
          Increment
        </button>
      </div>
      <div className="col-4">
        <h1>Count: {state.count} </h1>
      </div>
      <div className="col-1">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: ACTIONS.DEC })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
