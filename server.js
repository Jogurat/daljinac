require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./config.js");

const SECRET_KEY = config.SECRET_KEY;

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());

const actionsRouter = require("./routes/routes");
const userRouter = require("./routes/userRoutes");

app.use("/actions", actionsRouter);
app.use("/users", userRouter.router);
app.get("/", (req, res) => {
  res.sendfile("./index.html");
});

app.listen(config.PORT, () => console.log("Server started"));

module.exports = app;
