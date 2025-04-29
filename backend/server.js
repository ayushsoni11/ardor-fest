import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

//app.use("/api/events", eventRoutes);

dotenv.config();

const app = express();
app.use("/api/users", userRoutes);
app.use(express.json()); //working

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use("/api/auth", authRoutes);

// Default
app.get("/", (req, res) => {
  res.send("Server is live!");
});
app.use("/api/events", eventRoutes);
app.use("/api/registration", registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
