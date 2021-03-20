const express = require("express");
const router = express.Router();

// controllers
const {
  bookingCreate,
  bookingList,
  bookingUpdate,
  bookingDelete,
  fetchBooking,
} = require("../Controller/bookingController");

router.param("id", async (req, res, next, id) => {
  const Bookings = await fetchBooking(id, next);
  if (Bookings) {
    req.Booking = Bookings;
    next();
  } else {
    const err = new Error("Booking ID must be wrong please try again");
    err.status = 404;
    next(err);
  }
});
// Product list
router.get("/", bookingList);

// Adding Products
router.post("/create", bookingCreate);

// Deleting Products
router.delete("/:id", bookingDelete);

// Updating Products
router.put("/:id", bookingUpdate);

module.exports = router;
