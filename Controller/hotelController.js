const { Hotel } = require("../db/models");

exports.fetchHotel = async (id, next) => {
  try {
    const hotel = await Hotel.findByPk(id);
    return hotel;
  } catch (error) {
    next(error);
  }
};
exports.hotelCreate = async (req, res, next) => {
  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json(newHotel);
  } catch (error) {
    next(error);
  }
};
exports.hotelList = async (req, res, next) => {
  try {
    const hotels = await Hotel.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Hotel,
        as: "Hotels",
        attributes: ["id"],
      },
    });
    res.json(hotels);
  } catch (error) {
    next(error);
  }
};
exports.hotelDelete = async (req, res, next) => {
  try {
    await req.hotel.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.hotelUpdate = async (req, res, next) => {
  try {
    await req.hotel.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
