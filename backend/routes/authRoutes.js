import express from "express";
import {
  getMe,
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

import upload from "../config/cloudinaryConfig.js";
const router = express.Router();

// Register
router.post("/register", upload.single("profilePic"), registerUser);

// Login
router.post("/login", loginUser);
// GET /api/auth/me
router.get("/me", verifyToken, getMe);
//logout
router.post("/logout", verifyToken, logoutUser);

// Protected test route
router.get(
  "/protected",
  verifyToken,
  authorizeRoles("admin", "event-head"),
  (req, res) => {
    res.json({ message: `Welcome ${req.user.role}, you're authorized.` });
  }
);

export default router;
