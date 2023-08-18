import React from "react";
import useGetTodos from "./hooks/useGetTodos";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // const { response, error, loading } = useGetTodos();

  const [todos, setTodos] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MjE0MTg4NX0.Lor7yvj-KMwgk69L8Rcf93W02L430m8GGtV5ue85GkY";

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="App">
      <h1>Mern Todo App</h1>
      {todos.map((todo) => {
        return (
          <div>
            {todo.text}: {todo.completed ? "Complete" : "Not Complete"}
          </div>
        );
      })}

      {/* {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {response &&
            response?.map((item) => (
              <div>
                {item.text}: {item.completed ? "Complete" : "Not Complete"}
              </div>
            ))}
        </div>
      )} */}
    </div>
  );
}

export default App;
