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

// All events
router.get('/all-events', getAllEvents);

// Add event
// router.post("/create-event", verifyToken, authorizeRoles, createEvent); 
router.post("/create-event", verifyToken, authorizeRoles("event-head"), createEvent);

// Edit event
router.put("/edit-event/:id", verifyToken, authorizeRoles("event-head"), updateEvent);

// Delete event
router.delete("/:id", verifyToken, authorizeRoles("event-head"), deleteEvent);

// My events
router.get("/my-events", verifyToken, authorizeRoles("event-head"), getMyEvents);

// All Items 
router.get("/all-items", verifyToken, userEvents);

export default router;
