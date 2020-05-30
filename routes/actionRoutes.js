const express = require("express");
const router = express.Router();
const actionController = require("../controllers/actionController");

//Get all
router.get("/", actionController.getAll);

//Get ALL actions for given deviceID
// router.get("/:id", getAllDevices);
router.get("/:id", actionController.getAllById);

// Get all actions for given device id that are unprocessed (isProcessed === false)
router.get("/unprocessed/:id", actionController.getAllUnprocessed);

// Get the first sent (oldest) & unprocessed action for given device id
router.get("/firstUnprocessed/:id", actionController.getFirstUnprocessed);

//Create one
router.post("/", actionController.postOne);

//Update one
router.put("/:id", actionController.updateOne);

//Delete
router.delete("/:id", actionController.deleteById);

module.exports = router;
