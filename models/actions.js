const mongoose = require("mongoose");

const actionsSchema = new mongoose.Schema({
  deviceID: {
    type: String,
    required: true
  },
  actionCode: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Action", actionsSchema);
