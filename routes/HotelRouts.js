const express = require("express");
const router = express.Router();
const upload = require("../middlware/multer");

// controllers
const {
  hotelCreate,
  hotelList,
  roomsCreate,
  hotelUpdate,
  hotelDelete,
  fetchHotel,
} = require("../Controller/hotelController");

router.param("hotelId", async (req, res, next, hotelId) => {
  const hotel = await fetchHotel(hotelId, next);
  if (hotel) {
    req.hotel = hotel;
    next();
  } else {
    const err = new Error("hotel ID must be wrong please try again");
    err.status = 404;
    next(err);
  }
});
// Product list
router.get("/", hotelList);

// Adding Products
router.post("/", upload.single("image"), hotelCreate);
router.post("/:hotelId/Rooms", roomsCreate);

// Deleting Products
router.delete("/:hotelId", hotelDelete);

// Updating Products
router.put("/:hotelId", upload.single("image"), hotelUpdate);

module.exports = router;
