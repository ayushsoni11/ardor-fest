import jwt from "jsonwebtoken";
import User from "../models/User.js";
import ErrorHandler from "./error.js";

// Verify Token
export const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;

  console.log(req.cookies );

  if (!token) {
    return next(new ErrorHandler("Authentication failed. Please login.", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return next(new ErrorHandler("User not found. Please login again.", 401));
    }

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token.", 401));
  }
};

// export const authorizeRoles = async (req,res, next) => {
//   return (req, res, next) => {
//     console.log(req.user.role);
//     if (!req.user || !roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "Forbidden: Access denied" });
//     }
//     //pass control to next middleware , atak jayegi vrna
//    next();
//   };
// };


export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }
    next();
  };
};
