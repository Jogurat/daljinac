const mongoose = require("mongoose");

const devicesSchema = mongoose.Schema({
  state: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Device", devicesSchema);
