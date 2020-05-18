const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

//Get ALL users
const getAllUsers = router.get("/", userController.getAllUsers);

//Get user by username
const getUserByUsername = router.get(
  "/:username",
  userController.getUserByUsername
);

//Add new room
const addRoom = router.put("/room/:username", userController.addRoom);

function isLogged(req, res, next) {}

module.exports = {
  router,
  getAllUsers,
  getUserByUsername,
  addRoom,
};
