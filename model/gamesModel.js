// PACKAGE
import mongoose from "mongoose";

const gamesSchema = mongoose.Schema(
  {
    slug: String,
    name: { type: String, required: true, unique: true },
    description: {
      type: String,
    },
    platforms: [String],
    released: String,
    background_image: String,
    box_art: String,
    rating: Number,
    ratings: [String],
    ratings_count: Number,
    reviews_count: Number,
    metacriticScore: { type: Number, required: true },
    esrb_rating: String,
    screenshots: [String],
    parent_platforms: [String],
    genres: [String],
    gameID: { type: Number, required: true },
    publisher: {
      type: String,
      required: true,
    },
    developer: {
      type: String,
      required: true,
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
    platform: {
      ref: "Platform",
      type: mongoose.Schema.Types.ObjectId,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// MODEL
const Game = mongoose.model("Game", gamesSchema);

export default Game;
