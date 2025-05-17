import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middleware/error.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import multer from "multer";
import galleryRoutes from "./routes/galleryRoutes.js";

// const multer = require("multer");
const upload = multer({
  dest: "./upload",
  limits: {
    fileSize: 1000000,
  },
});

// Config
dotenv.config();
const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registration", registrationRoutes);
app.use("/api/certificate", certificateRoutes);
app.use("/api/gallery", galleryRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is live!");
});

// Error handling
app.use(errorMiddleware);
export default app;
