const express = require("express");

const router = express.Router();

const { createRoom,
        getRooms,
        joinRoom,
 } = require("../controllers/roomController");

router.post("/create", createRoom);
router.get("/", getRooms);
router.post("/join", joinRoom);

module.exports = router;