// PACKAGE
import express from "express";
const router = express.Router();

// CONTROLLERS
import {
  getGames,
  getGameById,
  getConsoles,
  getConsoleById,
  getAccessories,
  getAccessoryById,
  getMerchandises,
  getMerchandiseById,
  searchProducts,
} from "../controller/productControllers.js";

// ROUTES
router.route("/search").post(searchProducts);

router.route("/games").get(getGames);
router.route("/games/:id").get(getGameById);

router.route("/consoles").get(getConsoles);
router.route("/consoles/:id").get(getConsoleById);

router.route("/accessories").get(getAccessories);
router.route("/accessories/:id").get(getAccessoryById);

router.route("/merchandises").get(getMerchandises);
router.route("/merchandises/:id").get(getMerchandiseById);

export default router;
