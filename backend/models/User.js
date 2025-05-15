import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

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
    validate: [validator.isEmail, "please provide valid email"],
  },
  password: {
    type: String,
    required: true,
    // minlength: [8, "Password must be at least 8 characters"],
    // maxlength: [32, "Password must be at most 32 characters"],
  },
  role: {
    type: String,
    enum: ["user", "event-head", "super-admin"],
    default: "user",
  },
  profilePic: {
    type: String,
    //default: "", // Optional
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);
export default User;
