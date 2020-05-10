const mongoose = require("mongoose");

const roomsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  deviceID: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Room", roomsSchema);
