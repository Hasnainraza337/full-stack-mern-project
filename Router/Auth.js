const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth");
const signupSchema = require("../validators/authValidation");
const validate = require("../middlewares/authMiddleware")


router.get("/", authController.home)

router.post("/register", validate(signupSchema), authController.register)
router.post("/login", authController.login)

module.exports = router