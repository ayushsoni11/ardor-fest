import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { sendToken } from "../utils/jwtToken.js";
import dotenv from "dotenv";
dotenv.config();

export const getMe = async (req, res) => {
  try {
    // Yeh check karo ki req.user exist karta hai
    // if (!req.user || !req.user.id) {
    //   return res
    //     .status(401)
    //     .json({ message: "Unauthorized: Invalid token or user" });
    // }

    // const user = await User.findById(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    // return res.status(200).json({
    //   success: true,
    //   data: user,
    // });
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("Error in getMe:", error);

    // Prevent double send
    if (!res.headersSent) {
      return res.status(500).json({ message: "Server error" });
    }
  }
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const profilePic = req.file?.path;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      profilePic: profilePic,
      //role,
    });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const JWT_SECRET = process.env.JWT_SECRET; // for now, hardcoded

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Email and Password are required.", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  sendToken(user, 200, res, "User logged in successfully.");
};
export const registerUser = async (req, res) => {
  try {
    //debug
    // console.log("Inside registerUser");
    // console.log("Body:", req.body);
    // console.log("File:", req.file);

    const { username, email, password } = req.body;
    const profilePic = req.file?.path;

    // if (!profilePic) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Profile picture is required" });
    // }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      username,
      email,
      password,
      profilePic: profilePic,
      role: "user", //default set
    };

    // await userData.save();
    const user = await User.create(userData);
    sendToken(user, 201, res, "user registered");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
export const logoutUser = async (req, res) => {
  try {
    // On frontend, you remove token — here, we can just acknowledge logout
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error logging out", error: err.message });
  }
};
