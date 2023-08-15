const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();
console.log(process.env.MONGODB_URI);

// setup express server
const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.get("/todos", (req, res) => {
  res.send("hello anthony");
});

// configure the app
app.listen(8080);
