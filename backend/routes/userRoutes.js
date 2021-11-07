// PACKAGE
import express from "express";
const router = express.Router();

// CONTROLLERS
import {
  authUser,
  registerUser,
  getUserProfile,
  updatePersonal,
  updatePassword,
  updateAddress,
} from "../controller/userController.js";

// MIDDLEWARE
import { protect } from "../middleware/authMiddleware.js";

// ROUTES
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

router.route("/profile/personalDetails").put(protect, updatePersonal);
router.route("/profile/password").put(protect, updatePassword);
router.route("/profile/address").put(protect, updateAddress);

export default router;
