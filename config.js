require("dotenv").config();

let config = {};

config.PORT = process.env.PORT || 3000;
config.SECRET_KEY = process.env.SECRET_KEY || "secret_key";
config.EMAIL_SECRET = process.env.EMAIL_SECRET || "secret_email";
config.DB_HOST = process.env.DB_HOST || "http://localhost:3000";
config.FRONT_HOST = process.env.FRONT_HOST || "http://localhost:8080";

if (process.env.NODE_ENV == "development")
  config.MONGODB_URI = "mongodb://localhost/actions";
else if (process.env.NODE_ENV == "test")
  config.MONGODB_URI = "mongodb://localhost/testDB";
else config.MONGODB_URI = process.env.MONGODB_URI;

module.exports = config; //kad bi neko zeleo da koristi izvan ovog fajla
