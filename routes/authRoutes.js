const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config.js");

const SECRET_KEY = config.SECRET_KEY;
const EMAIL_SECRET = config.EMAIL_SECRET;

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

module.exports = router;
