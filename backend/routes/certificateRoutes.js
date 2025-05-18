import express from "express";
import { generateCertificate } from "../controllers/certificateController.js";
import { verifyToken, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", verifyToken, authorizeRoles("event-head"), generateCertificate
);


export default router;
