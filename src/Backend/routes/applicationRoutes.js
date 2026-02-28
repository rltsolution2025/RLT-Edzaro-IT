const express = require("express");
const router = express.Router();
const {submitApplication} = require("../controller/applicationController");

router.post("/registration", submitApplication);

module.exports = router;
