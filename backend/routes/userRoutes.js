import { verifyToken } from "../middleware/authMiddleware.js";
import express from "express";
import { getMe } from "../controllers/userController.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/authController.js";
//import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/users/me
//router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
// router.post("/sign", signup);
router.get("/me", verifyToken, getMe);
router.post(
  "/register",
  (req, res, next) => {
    upload.single("profilePic")(req, res, function (err) {
      if (err) {
        console.error("Multer error:", err);
        return res.status(400).json({ success: false, message: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    // Continue with user creation here
  }
);

export default router;

// router.get("/me", protect, (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Protected route accessed!", user: req.user });
// });
