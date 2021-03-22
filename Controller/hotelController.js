const { Hotel, Rooms } = require("../db/models");

exports.fetchHotel = async (hotelId, next) => {
  try {
    const hotel = await Hotel.findByPk(hotelId);
    return hotel;
  } catch (error) {
    next(error);
  }
};
exports.hotelCreate = async (req, res, next) => {
  if (req.file) {
    req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
  }

  try {
    const newHotel = await Hotel.create(req.body);
    res.status(201).json(newHotel);
  } catch (error) {
    next(error);
  }
};
exports.roomsCreate = async (req, res, next) => {
  try {
    req.body.hotelId = req.hotel.id;
    const newRooms = await Rooms.create(req.body);
    res.status(201).json(newRooms);
  } catch (error) {
    next(error);
  }
};
exports.hotelList = async (req, res, next) => {
  try {
    const hotels = await Hotel.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Rooms,
        as: "HotelRooms",
        attributes: ["Roomnum"],
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
