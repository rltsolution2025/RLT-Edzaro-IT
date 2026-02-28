const express = require("express");
const { getChatHistory } = require("../controller/LiveChatContorller");

const router = express.Router();

router.get("/livechat/history/:user1/:user2", getChatHistory);

module.exports = router;
