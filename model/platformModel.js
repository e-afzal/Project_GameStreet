// PACKAGE
import mongoose from "mongoose";

const platformSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    consoles: [{ ref: "Console", type: mongoose.Schema.Types.ObjectId }],
    videoGames: [{ ref: "Game", type: mongoose.Schema.Types.ObjectId }],
    accessories: [{ ref: "Accessory", type: mongoose.Schema.Types.ObjectId }],
    merchandises: [
      { ref: "Merchandise", type: mongoose.Schema.Types.ObjectId },
    ],
  },
  { timestamps: true }
);

// MODEL
const Platform = mongoose.model("Platform", platformSchema);

export default Platform;
