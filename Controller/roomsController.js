const { Rooms, Hotel } = require("../db/models");

exports.fetchRooms = async (roomId, next) => {
  try {
    const rooms = await Rooms.findByPk(roomId);
    return rooms;
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
