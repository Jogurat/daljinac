require("dotenv").config();

let config = {};

config.PORT = process.env.PORT || 3000;
config.SECRET_KEY = process.env.SECRET_KEY || "secret_key";
config.EMAIL_SECRET = process.env.EMAIL_SECRET || "secret_email";
config.DB_HOST = process.env.DB_HOST || "http://localhost:3000/api";
config.FRONT_HOST = process.env.FRONT_HOST || "http://localhost:8080";

if (process.env.NODE_ENV == "development")
  config.MONGODB_URI = "mongodb://localhost/actions";
else if (process.env.NODE_ENV == "test")
  config.MONGODB_URI = "mongodb://localhost/testDB";
else config.MONGODB_URI = process.env.MONGODB_URI;

console.log("hi from config");
// const fs = require("fs");
// let json = JSON.stringify(config);
// if (!fs.existsSync("config.json")) {
//   fs.writeFile("config.json", json, "utf8", (err) => {
//     console.log(err);
//   });
//  console.log("I made the config file! :)");
// }

module.exports = config;
