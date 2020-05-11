let config = {};

config.PORT = process.env.VUE_APP_PORT || 3000;
config.SECRET_KEY = process.env.VUE_APP_SECRET_KEY || "secret_key";
config.EMAIL_SECRET = process.env.VUE_APP_EMAIL_SECRET || "secret_email";
config.DB_HOST = process.env.VUE_APP_DB_HOST || "http://localhost";
config.FRONT_HOST = process.env.VUE_APP_FRONT_HOST || "http://localhost";

if (process.env.NODE_ENV == "development")
  config.MONGODB_URI = "mongodb://localhost/actions";
else if (process.env.NODE_ENV == "test")
  config.MONGODB_URI = "mongodb://localhost/testDB";
else config.MONGODB_URI = process.env.MONGODB_URI;

export { config };
