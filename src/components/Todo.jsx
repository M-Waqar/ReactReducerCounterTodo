import React from "react";
import { ACTIONS } from "./TodoApp";

const Todo = ({ todo, dispatch }) => {
  return (
    <div
      className={
        todo.complete ? "alert alert-primary p-4" : "alert alert-danger p-4"
      }
    >
      {todo.name}
      <span className="float-right">
        <button
          onClick={() => dispatch({ type: ACTIONS.TOGGLE, payload: todo.id })}
          className="btn btn-sm btn-primary mr-2"
        >
          Complete
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.DELETE, payload: todo.id })}
          className="btn btn-sm btn-primary"
        >
          Delete
        </button>
      </span>
    </div>
  );
};

export default Todo;
