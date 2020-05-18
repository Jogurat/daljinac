const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

//Post user REGSTER
const createUser = router.post("/", authController.createUser);

//LOGIN USER
const loginUser = router.post("/login", authController.loginUser);

const forgotPassMail = router.get(
  "/forgotPass/:username",
  authController.forgotPassMail
);

const changePass = router.put("/changePass", authController.changePass);

module.exports = router;
