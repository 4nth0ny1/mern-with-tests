const TodoModel = require("../models/TodoModel");

async function getTodosRoute(req, res) {
  const todos = await TodoModel.find();
  res.json(todos);
}

module.exports = { getTodosRoute };
