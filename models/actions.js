const mongoose = require("mongoose");

const actionsSchema = new mongoose.Schema({
  deviceID: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  },
  bits: {
    type: [Number],
    required: true
  },
  isProccessed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Action", actionsSchema);
