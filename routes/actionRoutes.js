const express = require("express");
const router = express.Router();
const Action = require("../models/actions");
const User = require("../models/users");

//Get all
router.get("/", async (req, res) => {
  try {
    const actions = await Action.find();
    res.json(actions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get ALL actions for given deviceID
router.get("/:id", async (req, res) => {
  try {
    // const action = await Action.findById(req.params.id);
    const action = await Action.find({ deviceID: req.params.id });
    res.json(action);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get by DEVICEID
router.get("/byDeviceId/:id", async (req, res) => {
  try {
    const action = await Action.find({ deviceID: req.params.id });
    res.json(action);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all actions for given device id that are unprocessed (isProcessed === false)
router.get("/unprocessed/:id", async (req, res) => {
  console.log("hi");
  try {
    const actions = await Action.find({
      deviceID: req.params.id,
      isProcessed: false,
    });
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get the first sent (oldest) & unprocessed action for given device id
router.get("/firstUnprocessed/:id", async (req, res) => {
  try {
    const actions = await Action.find({
      deviceID: req.params.id,
      isProcessed: false,
    });
    const last = actions.sort((a, b) => {
      b.createdAt - a.createdAt;
    });
    res.status(200).json(last[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create one
router.post("/", async (req, res) => {
  const action = new Action({
    deviceID: req.body.deviceID,
    code: req.body.code,
  });
  try {
    const newAction = await action.save();
    res.status(201).json(action);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.log("Error: " + err.message);
  }
});

//Update one
router.put("/:id", async (req, res) => {
  try {
    const actionToUpdate = await Action.findById(req.params.id);
    actionToUpdate.isProcessed = true;
    await actionToUpdate.save();
    res.status(201).json(actionToUpdate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create code for given deviceID
router.post("/codes/:id", async (req, res) => {
  try {
    const actionToPost = new Action({
      deviceID: req.body.deviceID,
      code: req.body.code,
      bits: req.body.bits,
    });
    await actionToPost.save();
    res.status(201).json(actionToPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get bits for given code and deviceID
router.get("/codes/:deviceID/:codeID", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
