const Action = require("../models/actions");
const User = require("../models/users");

let actionController = {};

actionController.getAll = async (req, res) => {
  try {
    const actions = await Action.find();
    res.json(actions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

actionController.getAllById = async (req, res) => {
  try {
    // const action = await Action.findById(req.params.id);
    const action = await Action.find({ deviceID: req.params.id });
    res.json(action);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all actions for given device id that are unprocessed (isProcessed === false)
actionController.getAllUnprocessed = async (req, res) => {
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
};

actionController.getFirstUnprocessed = async (req, res) => {
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
};

actionController.postOne = async (req, res) => {
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
};

actionController.updateOne = async (req, res) => {
  try {
    const actionToUpdate = await Action.findById(req.params.id);
    actionToUpdate.isProcessed = true;
    await actionToUpdate.save();
    res.status(201).json(actionToUpdate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = actionController;
