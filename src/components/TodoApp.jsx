import React, { useReducer, useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const reducer = (todos, action) => {
  debugger;
  switch (action.type) {
    case ACTIONS.ADD: {
      const newtodo = {
        id: uuidv4(),
        name: action.payload,
        complete: false,
      };
      return [...todos, newtodo];
    }
    case ACTIONS.TOGGLE: {
      return todos.map((todo) => {
        if (todo.id === action.payload) return { ...todo, complete: true };
        else return todo;
      });
    }
    case ACTIONS.DELETE: {
      return todos.filter((todo) => todo.id !== action.payload);
    }
    default:
      return todos;
  }
};

export const ACTIONS = {
  ADD: "ADD_TODO",
  DELETE: "DELETE_TODO",
  TOGGLE: "TOGGLE_DELETE",
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: name });
    setName("");
  };

  return (
    <div className="p-5">
      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
    </div>
  );
};

export default TodoApp;
