// PACKAGE
import asyncHandler from "express-async-handler";

// MODELS
import Game from "./../model/gamesModel.js";
import Console from "./../model/consoleModel.js";
import Accessory from "./../model/accessoryModel.js";
import Merchandise from "./../model/merchandiseModel.js";
import Platform from "./../model/platformModel.js";

// @desc      Fetch ALL products based on search criteria
// @route     GET /api/products/search
// @access   PUBLIC
const searchProducts = asyncHandler(async (req, res) => {
  const { category, availability, price, platform } = req.body;

  // 'PLATFORM' filtering done right here
  let unFiltered = await Platform.find({
    name:
      platform.length > 0
        ? platform
        : ["PS5", "PS4", "Xbox Series X|S", "Nintendo Switch", "Xbox One"],
  }).populate(
    "consoles accessories videoGames merchandises",
    "price category countInStock productImages title name background_image platform box_art"
  );

  // Looping over EACH PLATFORM, extracting EACH CONSOLE, GAME, ACCESSORIES, MERCH and 'pushing' to appropriate container/box
  let consoles;
  let consolesBox = [];
  let games;
  let gamesBox = [];
  let accessories;
  let accessoriesBox = [];
  let merchandises;
  let merchandisesBox = [];
  let allItems;

  unFiltered.forEach(({ consoles, videoGames, accessories, merchandises }) => {
    consoles.forEach((eachItem) => {
      consolesBox.push(eachItem);
    });
    videoGames.forEach((eachItem) => {
      gamesBox.push(eachItem);
    });
    accessories.forEach((eachItem) => {
      accessoriesBox.push(eachItem);
    });
    merchandises.forEach((eachItem) => {
      merchandisesBox.push(eachItem);
    });
  });

  consoles = consolesBox;
  games = gamesBox;
  accessories = accessoriesBox;
  merchandises = merchandisesBox;

  // Concatenating all 'products' into ONE container, i.e. 'itemsBox' and assign to 'allItemsFinal'.
  const itemsBox = [];
  const allItemsFinal = itemsBox.concat(
    consoles,
    games,
    accessories,
    merchandises
  );
  allItems = allItemsFinal;

  // IF 'CATEGORY' provided from FRONTEND, if not, return the 'allItems' UN-FILTERED by Category to the next stage
  if (category.length > 1) {
    allItems = allItems.filter((eachItem) => eachItem.category === category);
  }

  // IF 'AVAILABILITY' provided from FRONTEND
  if (availability.length > 1) {
    if (availability === "In Stock") {
      allItems = allItems.filter((eachItem) => eachItem.countInStock > 0);
    } else {
      allItems = allItems.filter((eachItem) => eachItem.countInStock === 0);
    }
  }

  // IF 'PRICE' provided from FRONTEND
  if (price.length > 1) {
    allItems = allItems.filter(({ price: itemPrice }) => {
      if (price === "0-500") {
        return itemPrice >= 0 && itemPrice < 500;
      } else if (price === "500-1000") {
        return itemPrice >= 500 && itemPrice < 1000;
      } else if (price === "1000-1500") {
        return itemPrice >= 1000 && itemPrice < 1500;
      } else if (price === "1500-2000") {
        return itemPrice >= 1500 && itemPrice < 2000;
      } else if (price === "2000+") {
        return itemPrice >= 2000;
      }
    });
  }

  res.json(allItems);
});

// @desc      Fetch all games
// @route     GET /api/products/games
// @access   PUBLIC
const getGames = asyncHandler(async (req, res) => {
  const games = await Game.find({});
  if (games) {
    res.json(games);
  } else {
    res.status(404);
    throw new Error("Games Not Found");
  }
});

// @desc      Fetch single game by ID
// @route     GET /api/products/games/:id
// @access   PUBLIC
const getGameById = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id)
    .select(
      "name price background_image screenshots platforms metacriticScore genres released developer publisher countInStock platform description category box_art"
    )
    .populate("platform", "name");

  if (game) {
    res.json(game);
  } else {
    res.status(404);
    throw new Error("Game Not Found");
  }
});

// @desc      Fetch all consoles
// @route     GET /api/products/consoles
// @access   PUBLIC
const getConsoles = asyncHandler(async (req, res) => {
  const consoles = await Console.find({});
  if (consoles) {
    res.json(consoles);
  } else {
    res.status(404);
    throw new Error("Consoles Not Found");
  }
});

// @desc      Fetch single console by ID
// @route     GET /api/products/consoles/:id
// @access   PUBLIC
const getConsoleById = asyncHandler(async (req, res) => {
  const console = await Console.findById(req.params.id).populate(
    "platform",
    "name"
  );
  if (console) {
    res.json(console);
  } else {
    res.status(404);
    throw new Error("Console Not Found");
  }
});

// @desc      Fetch all accessories
// @route     GET /api/products/accessories
// @access   PUBLIC
const getAccessories = asyncHandler(async (req, res) => {
  const accessories = await Accessory.find({});
  if (accessories) {
    res.json(accessories);
  } else {
    res.status(404);
    throw new Error("Accessories Not Found");
  }
});

// @desc      Fetch single accessory by ID
// @route     GET /api/products/accessories/:id
// @access   PUBLIC
const getAccessoryById = asyncHandler(async (req, res) => {
  const accessory = await Accessory.findById(req.params.id).populate(
    "platform",
    "name"
  );
  if (accessory) {
    res.json(accessory);
  } else {
    res.status(404);
    throw new Error("Accessory Not Found");
  }
});

// @desc      Fetch all merchandises
// @route     GET /api/products/merchandises
// @access   PUBLIC
const getMerchandises = asyncHandler(async (req, res) => {
  const merchandises = await Merchandise.find({});
  if (merchandises) {
    res.json(merchandises);
  } else {
    res.status(404);
    throw new Error("Merchandises Not Found");
  }
});

// @desc      Fetch single merchandise by ID
// @route     GET /api/products/accessories/:id
// @access   PUBLIC
const getMerchandiseById = asyncHandler(async (req, res) => {
  const merchandise = await Merchandise.findById(req.params.id).populate(
    "platform",
    "name"
  );
  if (merchandise) {
    res.json(merchandise);
  } else {
    res.status(404);
    throw new Error("Merchandise Not Found");
  }
});

export {
  searchProducts,
  getGames,
  getGameById,
  getConsoles,
  getConsoleById,
  getAccessories,
  getAccessoryById,
  getMerchandises,
  getMerchandiseById,
};
