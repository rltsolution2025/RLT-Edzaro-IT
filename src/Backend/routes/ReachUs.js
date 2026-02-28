// routes/enquiryRoutes.js
const express = require("express");

const {submitReachUs} = require("../controller/reachUsController")

const router = express.Router();

router.post("/reach-us", submitReachUs);

module.exports = router;
