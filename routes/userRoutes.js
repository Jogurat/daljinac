const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Action = require("../models/actions");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const checkAuth = require("../middleware/middleware");

const helper = require("../pages/changePassPage");
const config = require("../config.js");
require("dotenv").config();

const SECRET_KEY = config.SECRET_KEY;
const EMAIL_SECRET = config.EMAIL_SECRET;

//Transporter for sending pass change mail
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USERNAME, // generated ethereal user
    pass: process.env.EMAIL_PASS, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
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

//Post user REGSTER
const createUser = router.post("/", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  try {
    let oldUser = await User.findOne({ username });
    if (oldUser !== null)
      //Korisnik vec postoji!
      res
        .status(409)
        .json({ message: "User with this username already exists!" });
    else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          const user = new User({
            //ovde bi mozda trebalo samo da stoji objekat, a User da
            // a user da predstavlja semu iz modela
            username,
            password: hash,
            email,
          });
          try {
            const newUser = await user.save();
            res.status(202).json(newUser);
          } catch (err) {
            res.status(500).json({ message: err });
          }
        });
      });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//LOGIN USER
const loginUser = router.post("/login", async (req, res) => {
  //console.log("OVO JE USER " + req.body.username);
  const username = req.body.username;
  let password = req.body.password;
  try {
    const user = await User.findOne({ username });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        //console.log(result);
        //dobar pass
        jwt.sign(user.toJSON(), SECRET_KEY, (err, token) => {
          //console.log("Pravim token");
          //console.log(user.toJSON());
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
  const EMAIL_SECRET = config.EMAIL_SECRET;
  const url = config.FRONT_HOST + "/changePass/";
  try {
    let user = await User.findOne({ username: req.params.username });
    user.changePass = true;
    //console.log(user);
    jwt.sign(user.toJSON(), EMAIL_SECRET, { expiresIn: "2h" }, (err, token) => {
      const link = url + token;
      //console.log(setUrl.setUrl(link));
      //console.log("USER MEJL JE: " + user.email);
      //console.log("Link koji sam napravio je: " + link);
      let mailOptions = {
        from: '"daljina.cc support" <daljinaccc@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "daljina.cc password change", // Subject line
        // text: `Please click this link to change your pass: ${link}` // plain text body
        html: helper.setUrl(link),
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) return console.log(error);
      });
      res.status(200).json({ link });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    //console.log(err);
  }
});

const changePass = router.put("/changePass", (req, res) => {
  const token = req.body.token;
  const newPass = req.body.newPass;
  console.log(EMAIL_SECRET);
  jwt.verify(token, EMAIL_SECRET, async (err, decoded) => {
    const user = await User.findOne({ username: decoded.username });
    let password = newPass;
    //console.log(password);
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

// function checkAuth(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     //console.log(req);
//     const bearer = bearerHeader.split(" ");
//     const bearerToken = bearer[1];
//     //req.token = bearerToken;
//     jwt.verify(bearerToken, SECRET_KEY, (err, decoded) => {
//       if (decoded) next();
//       else res.sendStatus(403);
//     });
//     //next();
//   } else {
//     //console.log(req);
//     res.sendStatus(403);
//   }
// }

function isLogged(req, res, next) {}

module.exports = {
  router,
  getAllUsers,
  getUserByUsername,
  addRoom,
  createUser,
  loginUser,
  forgotPassMail,
  changePass,
};
