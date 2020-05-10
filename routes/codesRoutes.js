const express = require("express");
const router = express.Router();
const Code = require("../models/codes");

// Create code for given deviceID
router.post("/:id", async (req, res) => {
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
});

// Get all codes for all devices
router.get("/", async (req, res) => {
  try {
    const codes = await Code.find();
    res.status(200).json(codes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all codeTypes for given deviceID
router.get("/:id", async (req, res) => {
  try {
    const codes = await Code.find({ deviceID: req.params.id });
    res.status(200).json(codes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get entire code obj for given deviceID and codeType
router.get("/:id/:code", async (req, res) => {
  try {
    const code = await Code.findOne({
      deviceID: req.params.id,
      code: req.params.code,
    });
    res.status(200).json(code);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
