import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import getTodosRequest from "./api/getTodosRequest";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("renders learn react link", () => {
  render(<App />, { wrapper: wrapper });
  const linkElement = screen.getByText(/Mern Todo App/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Loading ... if no data is not fetched yet", () => {
  render(<App />, { wrapper: wrapper });
  const loadingDiv = screen.getByText(/Loading .../i);
  expect(loadingDiv).toBeInTheDocument();
});

test("renders todos when todos are fetched", async () => {
  render(<App />, { wrapper: wrapper });

  const expectation = nock("http://localhost:3000/todos")
    .get(getTodosRequest)
    .reply(200, {
      answer: 42,
    });

  const { result, waitFor } = renderHook(() => useFetchData(), { wrapper });

  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.data).toEqual({ answer: 42 });
});
