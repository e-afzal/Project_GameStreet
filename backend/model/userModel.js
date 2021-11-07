// PACKAGES
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    zipCode: {
      type: Number,
      required: true,
      default: 0,
    },
    streetAddress: {
      type: String,
      required: true,
      default: " ",
    },
    city: {
      type: String,
      required: true,
      default: "Dubai",
    },
  },
  {
    timestamps: true,
  }
);

// Check if user-provided password matches database password during LOGIN
// NOTE: 'matchPassword' method becomes available on every instance created using the userSchema
userSchema.methods.matchPassword = async function (enteredPassword) {
  // Returns 'truthy' or 'falsy'
  return await bcrypt.compare(enteredPassword, this.password);
};

// Execute HASHING of 'password' PRIOR to 'SAVING' a new doc, i.e. NEW USER
userSchema.pre("save", async function (next) {
  // Check if Password NOT modified, then proceed to SAVING document. 'this' refers to the instance/document.
  if (!this.isModified("password")) {
    next();
  }
  // If Password modified, run the below
  const salt = await bcrypt.genSalt(10);
  // Save HASHED password to 'this.password'
  this.password = await bcrypt.hash(this.password, salt);
});

// USER MODEL
const User = mongoose.model("User", userSchema);

export default User;
