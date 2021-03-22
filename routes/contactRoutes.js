const express = require("express");
const router = express.Router();
// controllers
const {
  contactCreate,
  contactList,
  contactUpdate,
  contactDelete,
  fetchContact,
} = require("../Controller/contactController");

router.param("contactId", async (req, res, next, contactId) => {
  const Contacts = await fetchContact(contactId, next);
  if (Contacts) {
    req.Contact = Contacts;
    next();
  } else {
    const err = new Error("Contact ID must be wrong please try again");
    err.status = 404;
    next(err);
  }
});
// Product list
router.get("/", contactList);

// Adding Products
router.post("/send", contactCreate);

// Deleting Products
router.delete("/:contactId", contactDelete);

// Updating Products
router.put("/:contactId", contactUpdate);

module.exports = router;
