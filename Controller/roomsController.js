const { Rooms } = require("../db/models");

exports.fetchRooms = async (id, next) => {
  try {
    const rooms = await Rooms.findByPk(id);
    return rooms;
  } catch (error) {
    next(error);
  }
};
exports.roomsCreate = async (req, res, next) => {
  try {
    const newRooms = await Rooms.create(req.body);
    res.status(201).json(newRooms);
  } catch (error) {
    next(error);
  }
};
exports.roomsList = async (req, res, next) => {
  try {
    const rooms = await Rooms.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Hotel,
        as: "HotelRooms",
        attributes: ["id"],
      },
    });
    res.json(rooms);
  } catch (error) {
    next(error);
  }
};
exports.roomsDelete = async (req, res, next) => {
  try {
    await req.rooms.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.roomsUpdate = async (req, res, next) => {
  try {
    await req.rooms.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
