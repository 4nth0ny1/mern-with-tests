const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.MONGODB_URI);

// setup express server
const app = express();

app.get("/todos", (req, res) => {
  res.send("hello anthony");
});

// configure the app
app.listen(8080);
