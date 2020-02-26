require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());

const actionsRouter = require("./routes/routes");
const userRouter = require("./routes/userRoutes");

app.use("/actions", actionsRouter);
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.sendfile("./index.html");
});

app.listen(process.env.PORT || 3000, () => console.log("Server started"));
