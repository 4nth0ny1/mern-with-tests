import React, { useState, useEffect } from "react";
// import { getTodos } from "./api/getTodosRequest";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MjE0MTg4NX0.Lor7yvj-KMwgk69L8Rcf93W02L430m8GGtV5ue85GkY";

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:8080/todos", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setTodos(response.data);
        });
    }, 3000);
  }, []);

  return (
    <div className="App">
      <h1>Mern Todo App</h1>
      {todos.length === 0 ? (
        <div>Loading ...</div>
      ) : (
        todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.text}: {todo.completed ? "Complete" : "Not Complete"}
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
