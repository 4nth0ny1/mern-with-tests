// import "./App.css";
import React from "react";
import getTodosRequest from "./api/getTodosRequest";

function App() {
  const todos = getTodosRequest();
  console.log(todos);

  return (
    <div className="App">
      <h1>Mern Todo App</h1>
      {/* {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.text}: {todo.completed ? "Complete" : "Not Complete"}
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
