// PACKAGE
import mongoose from "mongoose";

const merchandiseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productFeatures: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
    },
    productImages: [String],
    platform: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Platform",
    },
  },
  {
    timestamps: true,
  }
);

// 'MERCHANDISE' Model
const Merchandise = mongoose.model("Merchandise", merchandiseSchema);

export default Merchandise;
