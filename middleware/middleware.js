const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config.js");

const SECRET_KEY = config.SECRET_KEY;

const checkAuth = function (req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    //console.log(req);
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    //req.token = bearerToken;
    jwt.verify(bearerToken, SECRET_KEY, (err, decoded) => {
      if (decoded) next();
      else res.sendStatus(403);
    });
    //next();
  } else {
    //console.log(req);
    res.sendStatus(403);
  }
};

module.exports = checkAuth;
