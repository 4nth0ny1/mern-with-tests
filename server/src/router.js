const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const router = express.Router();
const loginRoute = require("./routes/loginRoute");
const todosRoute = require("./routes/todosRoute");

router.post("/login", loginRoute);
router.get("/todos", isLoggedIn, todosRoute);

module.exports = router;
