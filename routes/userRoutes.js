const express = require("express");
const router = express.Router();

const Action = require("../models/actions");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const checkAuth = require("../middleware/middleware");

const config = require("../config.js");
require("dotenv").config();

const SECRET_KEY = config.SECRET_KEY;
const EMAIL_SECRET = config.EMAIL_SECRET;

//Get ALL users
const getAllUsers = router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get user by username
const getUserByUsername = router.get("/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user !== null) res.status(200).json(user);
    else res.status(404).json({ message: "User not found 404" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Add new room
const addRoom = router.put("/room/:username", checkAuth, async (req, res) => {
  try {
    //GOT USER
    const user = await User.findOne({ username: req.params.username });

    let newRooms = user.rooms;
    newRooms.push({
      name: req.body.name,
      deviceID: req.body.deviceID,
      type: req.body.type,
    });
    user.rooms = newRooms;
    await user.save();
    res.status(202).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

function isLogged(req, res, next) {}

module.exports = {
  router,
  getAllUsers,
  getUserByUsername,
  addRoom,
};
