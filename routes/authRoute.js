const express = require("express");

const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} = require("../controllers/authController.js");

const {
  requireSignIn, 
  isAdmin,
} = require("../middlewares/authMiddleware.js");

const router = express.Router();


router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, isAdmin, testController);
router.post("/forgot-password", forgotPasswordController)

//protected route user-auth 
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok : true
  })
});

//protected route admin-auth 
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok : true
  })
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

module.exports = router;