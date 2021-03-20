const { Booking } = require("../db/models");

exports.fetchBooking = async (id, next) => {
  try {
    const booking = await Booking.findByPk(id);
    return booking;
  } catch (error) {
    next(error);
  }
};
exports.bookingCreate = async (req, res, next) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json(newBooking);
  } catch (error) {
    next(error);
  }
};
exports.bookingList = async (req, res, next) => {
  try {
    const booking = await Booking.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Booking,
        as: "Booking",
        attributes: ["id"],
      },
    });

    res.json(booking);
  } catch (error) {
    next(error);
  }
};
exports.bookingDelete = async (req, res, next) => {
  try {
    await req.booking.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.bookingUpdate = async (req, res, next) => {
  try {
    await req.booking.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
