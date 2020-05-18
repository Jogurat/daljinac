const express = require("express");
const router = express.Router();
const codesController = require("../controllers/codesController");

// Create code for given deviceID
router.post("/:id", codesController.postById);

// Get all codes for all devices
router.get("/", codesController.getAll);

// Get all codeTypes for given deviceID
router.get("/:id", codesController.getAllCodesById);

// Get entire code obj for given deviceID and codeType
router.get("/:id/:code", codesController.getCodeById);

module.exports = router;
