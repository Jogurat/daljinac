const Action = require("../models/actions");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
// const checkAuth = require("../middleware/middleware");

const config = require("../config.js");
require("dotenv").config();

const SECRET_KEY = config.SECRET_KEY;
const EMAIL_SECRET = config.EMAIL_SECRET;

let userController = {};

userController.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

userController.getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user !== null) res.status(200).json(user);
    else res.status(404).json({ message: "User not found 404" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

userController.addRoom = async (req, res) => {
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
};

userController.editRoom = async (req, res) => {
  console.log("hi from edit room");
  try {
    const user = await User.findOne({ username: req.params.username });
    console.log(req.body);
    let newRooms = user.rooms;
    console.log(newRooms);
    console.log(req.params.id);
    let roomToChange = newRooms.find((el) => el._id == req.params.id);
    console.log(roomToChange);
    roomToChange.name = req.body.name;
    roomToChange.deviceID = req.body.deviceID;
    roomToChange.type = req.body.type;
    user.rooms = newRooms;
    console.log(newRooms);
    await user.save();
    res.status(202).json(newRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};

module.exports = userController;
