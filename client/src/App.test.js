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
import * as axios from "axios";
import getTodosRequest from "./hooks/getTodosRequest";

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

test("renders Loading ... if no data is not fetched yet", () => {
  const loadingDiv = screen.getByText(/Loading .../i);
  expect(loadingDiv).toBeTruthy();
});

test("renders todos when todos are fetched", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        text: "test todo",
      },
    })
  );

  const response = await getTodosRequest();
  const bot_Text = "test todo";
  expect(response).toMatch(bot_Text);

  // expect(axios).toHaveBeenCalled();
  // expect(response).toEqual("test todo");

  // https://tanstack.com/query/v4/docs/react/guides/testing
  // const expectation = nock("http://localhost:8080").get("/todos").reply(200, {
  //   text: "test todo",
  // });
  // const { result } = renderHook(() => useFetchData(), { wrapper });
  // await waitFor(() => expect(result.current.isSuccess).toBe(true));
  // console.log(result.current.isSuccess);
  // expect(result.current.data.text).toEqual("test todo");
});
