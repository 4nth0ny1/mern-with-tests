import "./App.css";
import getTodosRequest from "./api/getTodosRequest";
import { useQuery } from "react-query";

function App() {
  function useFetchData() {
    return useQuery({
      queryKey: ["todos"],
      queryFn: () => getTodosRequest(),
    });
  }

  const { isLoading, data: todos } = useFetchData();

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
