require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./config.js");
const serveStatic = require("serve-static");
const path = require("path");

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

//deployment
// app.use('/', serveStatic(path.join(__dirname, '/dist')))

// app.get(/.*/, function (req, res) {
//   res.sendFile(path.join(__dirname, '/dist/index.html'))
// })

const actionsRouter = require("./routes/actionRoutes");
const userRouter = require("./routes/userRoutes");

app.use("/actions", actionsRouter);
app.use("/users", userRouter.router);
// app.get("/", (req, res) => {
//   res.sendfile("./index.html");
// });
//comments
let server = app.listen(config.PORT, () => console.log("Server started"));

module.exports = server;
