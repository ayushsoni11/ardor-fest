import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user"],
    default: "user",
  },
  profilePic: {
    type: String,
    default: "", // Optional
  },
});

const User = mongoose.model("User", userSchema);
export default User;
