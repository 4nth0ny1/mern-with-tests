import {
  render,
  screen,
  renderHook,
  waitFor,
  cleanup,
} from "@testing-library/react";
import App from "./App";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import nock from "nock";
import axios from "axios";
import useGetTodos from "./hooks/useGetTodos";

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

// jest.mock("axios", () => jest.fn(() => Promise.resolve("test todo")));

jest.mock("axios", () => ({
  get: jest.fn(),
}));

beforeEach(() => {
  render(<App />, { wrapper: wrapper });
});

afterEach(cleanup);

test("renders Mern Todo App", () => {
  const linkElement = screen.getByText(/Mern Todo App/i);
  expect(linkElement).toBeTruthy();
});

// test("renders Loading ... if no data is not fetched yet", () => {
//   const loadingDiv = screen.getByText(/Loading.../i);
//   expect(loadingDiv).toBeTruthy();
// });

// test("renders todos when todos are fetched", () => {
//   const todos = [{ text: "test todo" }];

//   axios.get.mockImplementationOnce(() => {
//     Promise.resolve({ data: todos });
//   });
// });
