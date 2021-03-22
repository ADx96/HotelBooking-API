const express = require("express");
const router = express.Router();

// controllers
const {
  roomsUpdate,
  roomsDelete,
  roomsList,
  fetchRooms,
} = require("../Controller/roomsController");

router.param("roomId", async (req, res, next, roomId) => {
  const Rooms = await fetchRooms(roomId, next);
  if (Rooms) {
    req.rooms = Rooms;
    next();
  } else {
    const err = new Error("Room Not Found");
    err.status = 404;
    next(err);
  }
});
// Product list
router.get("/", roomsList);

// Deleting Products
router.delete("/:roomId", roomsDelete);

// Updating Products
router.put("/:roomId", roomsUpdate);

module.exports = router;
