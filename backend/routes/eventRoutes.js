import express from "express";
import {
  createEvent,
  getMyEvents,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createEvent); // Add event
router.get("/myevents", verifyToken, getMyEvents); // View my events
router.put("/update/:id", verifyToken, updateEvent); // Update event
router.delete("/delete/:id", verifyToken, deleteEvent); // Delete event

export default router;
