import express from "express";
import {
  createEvent,
  getMyEvents,
  updateEvent,
  deleteEvent,
  userEvents,
} from "../controllers/eventController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authMiddleware.js";
import { getAllEvents } from "../controllers/eventController.js";

const router = express.Router();

router.post("/create", verifyToken, authorizeRoles("event-head"), createEvent); // Add event
router.get("/myevents", verifyToken, authorizeRoles("event-head"), getMyEvents); // View my events
router.put(
  "/update/:id",
  verifyToken,
  authorizeRoles("event-head"),
  updateEvent
); // Update event
router.delete(
  "/delete/:id",
  verifyToken,
  authorizeRoles("event-head"),
  deleteEvent
); // Delete event

router.get("/all", verifyToken, authorizeRoles("super-admin"), getAllEvents);
router.get("/allItems", verifyToken, userEvents);
export default router;
