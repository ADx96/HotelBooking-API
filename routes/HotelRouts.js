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

router.param("id", async (req, res, next, id) => {
  const hotels = await fetchHotel(id, next);
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
router.delete("/:id", hotelDelete);

// Updating Products
router.put("/:id", hotelUpdate);

module.exports = router;
