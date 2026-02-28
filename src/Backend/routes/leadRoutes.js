const express = require("express");
const router = express.Router();
const {saveLead, getLeads } = require("../controller/leadController");

// Save lead info
router.post("/lead", saveLead);

// Optional: Get all leads (for admin use)
router.get("/lead", getLeads);

module.exports = router;
