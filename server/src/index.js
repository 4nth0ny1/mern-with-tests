const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");

dotenv.config();
console.log(process.env.MONGODB_URI);

// setup express server
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(router);

app.get("/todos", (req, res) => {
  res.send("hello anthony");
});

// configure the app
app.listen(8080);
