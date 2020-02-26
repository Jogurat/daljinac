const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Action = require("../models/actions");
const User = require("../models/users");

//Get users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Post user
router.post("/", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  try {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, async (err, hash) => {
        user.password = hash;
        const newUser = await user.save();
        res.status(201).json(newUser);
      });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
