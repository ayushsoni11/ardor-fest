import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getMe = async (req, res) => {
  try {
    // Yeh check karo ki req.user exist karta hai
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token or user" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      data: user,
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
    const profilePic = req.files?.profilePic;

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
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// export const signup = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const profilePic = req.files?.profilePic;

//     if (!username || !email || !password || !profilePic) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Optional: Save the file to a folder (e.g., /uploads)
//     const filePath = `uploads/${Date.now()}-${profilePic.name}`;
//     await profilePic.mv(filePath);

//     const newUser = await User.create({
//       username,
//       email,
//       password: hashedPassword,
//       profilePic: filePath,
//     });

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };


const JWT_SECRET = process.env.JWT_SECRET; // for now, hardcoded

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
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

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePic: profilePic,
      //role: "user", //default set
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!"}); 

    
    
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
