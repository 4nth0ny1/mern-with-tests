const { getTodosRoute } = require("../routes/getTodosRoute");
const TodoModel = require("../models/TodoModel");

jest.mock("../models/TodoModel");

const res = {
  status: jest.fn((x) => x),
  send: jest.fn((x) => x),
};

it("should send status code 201 when res is sent", async () => {
  TodoModel.find.mockImplementationOnce(() => ({
    id: 1,
    text: "testing",
    completed: false,
  }));
  await getTodosRoute(res);
  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.send).toHaveBeenCalledTimes(1);
});
