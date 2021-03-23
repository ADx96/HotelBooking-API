const { Contact } = require("../db/models");

exports.fetchContact = async (contactId, next) => {
  try {
    const contacts = await Contact.findByPk(contactId);
    return contacts;
  } catch (error) {
    next(error);
  }
};
exports.contactCreate = async (req, res, next) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};
exports.contactList = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};
exports.contactDelete = async (req, res, next) => {
  try {
    await req.contacts.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.contactUpdate = async (req, res, next) => {
  try {
    await req.contacts.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
