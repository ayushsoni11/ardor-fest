import express from "express";
import {
  registerForEvent,
  getRegistrationsByEvent,
  getAllRegistrations,
} from "../controllers/registrationController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route for registering
router.post(
  "/register/:eventId",
  // protect,
  authorizeRoles("user", "event-head"),
  registerForEvent
);

// Admin or event-head can view registrations

router.get(
  "/all",
  verifyToken,
  authorizeRoles("super-admin"),
  getAllRegistrations
);
router.get("/:eventId", verifyToken, getRegistrationsByEvent);
export default router;
//debugging lines
// router.get("/test", (req, res) => {
//   res.send("Registration route connected");
// });
