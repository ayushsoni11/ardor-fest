import { protect, verifyToken } from "../middleware/authMiddleware.js";
import express from "express";
import { getMe } from "../controllers/userController.js";
//import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/users/me
router.get("/me", verifyToken, getMe);

export default router;

router.get("/me", protect, (req, res) => {
  res
    .status(200)
    .json({ message: "Protected route accessed!", user: req.user });
});
