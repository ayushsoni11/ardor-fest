import express from "express";
import {
  addGalleryItem,
  getAllGalleryItems,
} from "../controllers/galleryController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/getImg", verifyToken, getAllGalleryItems);
router.post(
  "/addImg",
  verifyToken,
  authorizeRoles("event-head"),
  addGalleryItem
);

export default router;
