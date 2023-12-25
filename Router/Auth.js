const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth");
const signupSchema = require("../validators/registerValidation");
const loginSchema = require("../validators/loginValidation");
const validate = require("../middlewares/authMiddleware");


router.get("/", authController.home)

router.post("/register", validate(signupSchema), authController.register)
router.post("/login", validate(loginSchema), authController.login)

module.exports = router