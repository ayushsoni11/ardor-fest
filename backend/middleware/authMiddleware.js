import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Verify Token
export const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;

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
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }
    //pass control to next middleware , atak jayegi vrna
    next();
  };
};

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid Token" });
//   }
// };

// export default authMiddleware;
