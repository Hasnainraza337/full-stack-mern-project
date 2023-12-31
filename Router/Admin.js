const express = require("express");
const adminController = require("../controllers/admin-controllers");
const router = express.Router();
const authMiddleware = require("../middlewares/userMiddleware")

router.get("/users", authMiddleware, adminController.getAllUsers);
router.get("/contacts", authMiddleware, adminController.getAllContacts);

module.exports = router;