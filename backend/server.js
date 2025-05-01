import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js"; // only import app, do NOT declare app again

dotenv.config();

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
