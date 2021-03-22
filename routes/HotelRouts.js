const express = require("express");
const router = express.Router();

// controllers
const {
  hotelCreate,
  hotelList,
  hotelUpdate,
  hotelDelete,
  fetchHotel,
} = require("../Controller/hotelController");

router.param("hotelId", async (req, res, next, hotelId) => {
  const hotels = await fetchHotel(hotelId, next);
  if (hotels) {
    req.hotel = hotels;
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
router.post("/create", hotelCreate);

// Deleting Products
router.delete("/:hotelId", hotelDelete);

// Updating Products
router.put("/:hotelId", hotelUpdate);

module.exports = router;
