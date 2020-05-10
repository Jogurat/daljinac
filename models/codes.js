const mongoose = require("mongoose");

const codesSchema = new mongoose.Schema({
  deviceID: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  bits: {
    type: [Number],
    required: true,
  },
});

module.exports = mongoose.model("Code", codesSchema);
