import { render, screen, renderHook, waitFor } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import useFetchData from "../src/App";
import nock from "nock";

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
  // https://tanstack.com/query/v4/docs/react/guides/testing

  const expectation = nock("http://localhost:3000")
    .get(useFetchData)
    .reply(200, {
      text: "test todo",
    });

  const { result } = renderHook(() => useFetchData(), { wrapper });

  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.data).toEqual({ text: "test todo" });
});
