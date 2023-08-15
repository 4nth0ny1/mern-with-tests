import "./App.css";
import getTodosRequest from "./api/getTodosRequest";
import { useQuery } from "react-query";

function App() {
  const { isLoading, data: todos } = useQuery("todos", getTodosRequest);

  return (
    <div className="App">
      <h1>Mern Todo App</h1>
      {isLoading ? (
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
