// PACKAGE
import asyncHandler from "express-async-handler";

// MODEL
import User from "./../model/userModel.js";

// UTIL
import generateToken from "../util/generateToken.js";

// @desc      Authenticate/login user,get & assign token
// @route     POST /api/users/login
// @access   PUBLIC
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // 'matchPassword' method created in USER SCHEMA
  if (user && (await user.matchPassword(password))) {
    // Send USER DETAILS if Login successful
    res.json({
      _id: user._id,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      number: user.number,
      isAdmin: user.isAdmin,
      zipCode: user.zipCode,
      streetAddress: user.streetAddress,
      city: user.city,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid username or password");
  }
});

// @desc      Register NEW user
// @route     POST /api/users
// @access   PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { fName, lName, email, number, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists..");
  } else {
    // Creating a new user
    const user = await User.create({
      fName,
      lName,
      email,
      number,
      password,
    });

    // If USER created successfully
    if (user) {
      // Return the user data upon SUCCESSFUL registration to login automatically. 201 means 'resource created'.
      res.status(201).json({
        _id: user._id,
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        number: user.number,
        isAdmin: user.isAdmin,
        zipCode: user.zipCode,
        streetAddress: user.streetAddress,
        city: user.city,
        // Authenticate user upon registration using below
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
});

// @desc      Get User Profile
// @route     GET /api/users/profile
// @access   PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      number: user.number,
      zipCode: user.zipCode,
      streetAddress: user.streetAddress,
      city: user.city,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found..");
  }
});

// @desc      Update User Personal Details
// @route     POST /api/users/profile/personalDetails
// @access   PRIVATE
const updatePersonal = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.fName = req.body.fName || user.fName;
    user.lName = req.body.lName || user.lName;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      fName: updatedUser.fName,
      lName: updatedUser.lName,
      email: updatedUser.email,
      number: updatedUser.number,
      zipCode: updatedUser.zipCode,
      streetAddress: updatedUser.streetAddress,
      city: updatedUser.city,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found..");
  }
});

// @desc      Update User Password
// @route     POST /api/users/profile/password
// @access   PRIVATE
const updatePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      fName: updatedUser.fName,
      lName: updatedUser.lName,
      email: updatedUser.email,
      number: updatedUser.number,
      zipCode: updatedUser.zipCode,
      streetAddress: updatedUser.streetAddress,
      city: updatedUser.city,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found..");
  }
});

// @desc      Update User Delivery Address
// @route     POST /api/users/profile/address
// @access   PRIVATE
const updateAddress = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.streetAddress = req.body.streetAddress || user.streetAddress;
    user.zipCode = req.body.zipCode || user.zipCode;
    user.city = req.body.city || user.city;
    user.number = req.body.number || user.number;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      fName: updatedUser.fName,
      lName: updatedUser.lName,
      email: updatedUser.email,
      number: updatedUser.number,
      zipCode: updatedUser.zipCode,
      streetAddress: updatedUser.streetAddress,
      city: updatedUser.city,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found..");
  }
});

export {
  authUser,
  registerUser,
  getUserProfile,
  updatePersonal,
  updatePassword,
  updateAddress,
};
