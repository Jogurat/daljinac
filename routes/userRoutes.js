const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Action = require("../models/actions");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const helper = require("../pages/changePassPage");

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;
const EMAIL_SECRET = process.env.EMAIL_SECRET;

//Transporter for sending pass change mail
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "daljinaccc@gmail.com", // generated ethereal user
    pass: "daljinacc123" // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});

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
    if (user !== null) res.json(user);
    else res.status(404).json({ message: "User not found 404" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Add new room

const addRoom = router.put("/room/:username", async (req, res) => {
  try {
    //GOT USER
    const user = await User.findOne({ username: req.params.username });

    let newRooms = user.rooms;
    newRooms.push({ name: req.body.name, deviceID: req.body.deviceID });
    user.rooms = newRooms;
    await user.save();
    res.status(202).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Post user REGSTER
const createUser = router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const user = new User({
        username,
        password: hash,
        email
      });
      try {
        const newUser = await user.save();
        res.json(newUser).status(201);
      } catch (err) {
        res.status(400).json(err);
      }
    });
  });
});

//LOGIN USER
const loginUser = router.post("/login", async (req, res) => {
  console.log("OVO JE USER " + req.body.username);
  const username = req.body.username;
  let password = req.body.password;
  try {
    const user = await User.findOne({ username });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        console.log(result);
        //dobar pass
        jwt.sign(user.toJSON(), SECRET_KEY, (err, token) => {
          console.log("Pravim token");
          console.log(user.toJSON());
          res.status(200).json(token); //SIGNED IN
        });
      } else {
        //los pass
        //res.json({ message: "Wrong username or password" }).status(404);
        res
          .status(404)
          .json({ message: "Pogresno korisnicko ime ili lozinka" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create link for changing pass with JWT
const forgotPassMail = router.get("/forgotPass/:username", async (req, res) => {
  const EMAIL_SECRET = process.env.EMAIL_SECRET;
  const url = "http://localhost:8080/changePass/";
  try {
    let user = await User.findOne({ username: req.params.username });
    user.changePass = true;
    console.log(user);
    jwt.sign(user.toJSON(), EMAIL_SECRET, { expiresIn: "2h" }, (err, token) => {
      const link = url + token;
      //console.log(setUrl.setUrl(link));
      console.log("USER MEJL JE: " + user.email);
      console.log("Link koji sam napravio je: " + link);
      let mailOptions = {
        from: '"daljina.cc support" <daljinaccc@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "daljina.cc password change", // Subject line
        // text: `Please click this link to change your pass: ${link}` // plain text body
        html: helper.setUrl(link)
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
      });
      res.status(200).json({ link });
    });
  } catch (err) {
    console.log(err);
  }
});

const changePass = router.put("/changePass", (req, res) => {
  const token = req.body.token;
  const newPass = req.body.newPass;
  console.log(EMAIL_SECRET);
  jwt.verify(token, EMAIL_SECRET, async (err, decoded) => {
    const user = await User.findOne({ username: decoded.username });
    let password = newPass;
    console.log(password);
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        try {
          user.password = hash;
          await user.save();
          res.json(user).status(201);
        } catch (err) {
          res.status(400).json(err);
        }
      });
    });
  });
});

function checkAuth(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearear[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = {
  router,
  getAllUsers,
  getUserByUsername,
  addRoom,
  createUser,
  loginUser,
  forgotPassMail,
  changePass
};
