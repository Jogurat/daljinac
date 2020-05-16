require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./config");
const serveStatic = require("serve-static");
const path = require("path");
const checkAuth = require("./middleware/middleware");
const SECRET_KEY = config.SECRET_KEY;

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());

const authRouter = require("./routes/authRoutes");
const actionsRouter = require("./routes/actionRoutes");
const userRouter = require("./routes/userRoutes");
const codesRouter = require("./routes/codesRoutes");

app.use("/api/auth", authRouter);
app.use("/api/actions", actionsRouter);
app.use("/api/users", userRouter.router);
app.use("/api/codes", codesRouter);

//deployment
// test comment
app.use("/", serveStatic(path.join(__dirname, "./client/dist")));

app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

//comments
// console.log(config);
let server = app.listen(config.PORT, () => console.log("Server started"));

module.exports = server;
