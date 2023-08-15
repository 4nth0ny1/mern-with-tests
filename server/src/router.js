const express = require("express");

const router = express.Router();
const loginRoute = require("./routes/loginRoute");

router.post("/login", loginRoute);

module.exports = router;
