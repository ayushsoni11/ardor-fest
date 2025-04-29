import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connection } from "./database/connection.js";
import { errorMiddleware } from "./middleware/error.js";
import fileUpload from "express-fileupload";
import registrationRoutes from "./routes/registrationRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";

const app = express();
config({ path: "./config/config.env" });
const cors = require("cors");

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
app.use("/api/registration", registrationRoutes);
app.use("/api/certificate", certificateRoutes);

connection();
app.use(errorMiddleware);

export default app;
