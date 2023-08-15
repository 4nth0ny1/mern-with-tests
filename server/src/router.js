const express = require("express");

const router = express.Router();
const loginRoute = require("./routes/loginRoute");
const todosRoute = require("./routes/todosRoute");

router.post("/login", loginRoute);
router.get("/todos", todosRoute);

module.exports = router;
