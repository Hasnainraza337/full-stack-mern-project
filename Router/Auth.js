const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth")


router.get("/", authController.home)

router.post("/register", authController.register)
router.post("/login", authController.login)

module.exports = router