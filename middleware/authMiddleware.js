// PACKAGES
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

// MODEL
import User from "./../model/userModel.js";

// Get User Token, verify it and add to 'req' for web/app usage
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // NOTE: 'decoded' is an OBJECT containing the 'payload' which is the ID since ID was used in the 'generateToken' utils.
      // So now we have access to the 'ID' which we can use to unlock other things
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Fetching user by ID and saving User Details to 'req.user' for use throughout the APP
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized. Invalid token.");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized! No token found..");
  }
});

export { protect };
