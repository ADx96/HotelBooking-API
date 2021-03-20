const express = require("express");
const BookingRoutes = require("./routes/bookingRoutes");
const HotelsRoutes = require("./routes/HotelRouts");
const RoomsRoutes = require("./routes/RoomsRoutes");
const db = require("./db/models");

const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());
const slugify = require("slugify");

//Routes
app.use("/Bookings", BookingRoutes);
app.use("/Hotels", HotelsRoutes);
app.use("/Rooms", RoomsRoutes);
//App function
const run = async () => {
  try {
    await db.sequelize.sync();

    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
  next(err);
});
run();
