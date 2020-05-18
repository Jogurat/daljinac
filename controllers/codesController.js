const Code = require("../models/codes");

let codesController = {};

// Create code for given deviceID
codesController.postById = async (req, res) => {
  try {
    const codeToPost = new Code({
      deviceID: req.body.deviceID,
      code: req.body.code,
      bits: req.body.bits,
    });
    await codeToPost.save();
    res.status(201).json(codeToPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all codes for all devices
codesController.getAll = async (req, res) => {
  try {
    const codes = await Code.find();
    res.status(200).json(codes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

codesController.getAllCodesById = async (req, res) => {
  try {
    const code = await Code.findOne({
      deviceID: req.params.id,
      code: req.params.code,
    });
    res.status(200).json(code);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

codesController.getCodeById = async (req, res) => {
  try {
    const code = await Code.findOne({
      deviceID: req.params.id,
      code: req.params.code,
    });
    res.status(200).json(code);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = codesController;
