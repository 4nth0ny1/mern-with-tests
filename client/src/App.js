import useGetTodos from "./hooks/useGetTodos";

function App() {
  const { response, error, loading } = useGetTodos();

  return (
    <div className="App">
      <h1>Mern Todo App</h1>
      {loading ? (
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
      )}
    </div>
  );
}

export default App;
