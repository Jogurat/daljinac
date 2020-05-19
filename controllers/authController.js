const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const helper = require("../pages/changePassPage");

const config = require("../config.js");

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

let authController = {};

authController.createUser = async (req, res) => {
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
            res.status(201).json(newUser);
          } catch (err) {
            res.status(500).json({ message: err });
          }
        });
      });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

authController.loginUser = async (req, res) => {
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
};

authController.forgotPassMail = async (req, res) => {
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
        html: helper.setUrl(link, user.username),
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
};

authController.changePass = (req, res) => {
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
};

module.exports = authController;
