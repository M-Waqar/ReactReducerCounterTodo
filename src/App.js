import React from "react";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="container p-5 ">
      <div className="text-center">
        <h1 className="bg-primary p-4">COUNTER USING REDUCER</h1>
        <Counter />
      </div>
      <div>
        <h1 className="bg-primary p-4">TODO APP USING REDUCER</h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
