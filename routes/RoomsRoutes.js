const express = require("express");
const router = express.Router();

// controllers
const {
  roomsUpdate,
  roomsDelete,
  roomsList,
  roomsCreate,
  fetchRooms,
} = require("../Controller/roomsController");

router.param("id", async (req, res, next, id) => {
  const Rooms = await fetchRooms(id, next);
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

// Adding Products
router.post("/book", roomsCreate);

// Deleting Products
router.delete("/:id", roomsDelete);

// Updating Products
router.put("/:id", roomsUpdate);

module.exports = router;
