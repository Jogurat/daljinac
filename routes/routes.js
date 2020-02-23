const express = require("express");
const router = express.Router();
const Action = require("../models/actions");

//Get all
router.get("/", async (req, res) => {
  try {
    const actions = await Action.find();
    res.json(actions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get one
router.get("/:id", async (req, res) => {
  try {
    console.log("Nalazim se u router get by id");
    const action = await Action.findById(req.params.id);
    res.json(action);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create one
router.post("/", async (req, res) => {
  const action = new Action({
    deviceID: req.body.deviceID,
    actionCode: req.body.actionCode
  });
  try {
    const newAction = await action.save();
    res.status(201).json(action);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update one
router.patch("/", (req, res) => {});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
