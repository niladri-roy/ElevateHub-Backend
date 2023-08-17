const express = require("express");

const {
  registerController,
  loginController,
  testController
} = require("../controllers/authController.js");

const {
  requireSignIn, 
  isAdmin,
} = require("../middlewares/authMiddleware.js");

const router = express.Router();


router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, isAdmin, testController)

module.exports = router;