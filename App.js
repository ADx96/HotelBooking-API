const express = require("express");
const BookingRoutes = require("./routes/bookingRoutes");
const ContactRoutes = require("./routes/contactRoutes");
const HotelsRoutes = require("./routes/HotelRouts");
const RoomsRoutes = require("./routes/RoomsRoutes");
const path = require("path");
const slugify = require("slugify");
const db = require("./db/models");

const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

//Routes
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/Contact", ContactRoutes);
app.use("/Bookings", BookingRoutes);
app.use("/Hotels", HotelsRoutes);
app.use("/Rooms", RoomsRoutes);
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
  next(err);
});

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
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

run();
