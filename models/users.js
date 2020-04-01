const mongoose = require("mongoose");
const Device = require("./devices");
const Action = require("./actions");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  rooms: [
    {
      name: {
        type: String,
        required: true
      },
      deviceID: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model("User", usersSchema);
