const express = require("express");
const adminController = require("../controllers/admin-controllers");
const router = express.Router();
const authMiddleware = require("../middlewares/userMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/users", authMiddleware, adminMiddleware, adminController.getAllUsers);
router.get("/contacts", authMiddleware, adminMiddleware, adminController.getAllContacts);

module.exports = router;