const { Contact } = require("../db/models");

exports.fetchContact = async (contactId, next) => {
  try {
    const contact = await Contact.findByPk(contactId);
    return contact;
  } catch (error) {
    next(error);
  }
};
exports.contactCreate = async (req, res, next) => {
  try {
    const newContact = await Hotel.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};
exports.contactList = async (req, res, next) => {
  try {
    const contacts = await Hotel.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(contacts);
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
