const express = require("express");
const router = express.Router();
const chatEp = require("../endpoints/chatEp");

router.post("/chat", chatEp.chat);

module.exports = router;
