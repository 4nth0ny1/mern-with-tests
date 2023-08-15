const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const router = require("./router");

dotenv.config();

// setup express server
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(router);

// configure the app
app.listen(8080);
