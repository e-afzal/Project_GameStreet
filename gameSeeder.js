// PACKAGES
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// DATA
import ps5Games from "./data/ps5Games.js";
import ps4Games from "./data/ps4Games.js";
import xboxSeries from "./data/xboxSeriesGames.js";
import xboxOneGames from "./data/xboxOneGames.js";
import switchGames from "./data/switchGames.js";

// MODELS
import Game from "./model/gamesModel.js";
import User from "./model/userModel.js";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected successfully: ${conn.connection.host} `);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

const importData = async () => {
  try {
    // Extract 'ADMIN' user from DB to add to each game below
    const createdUsers = await User.find({ isAdmin: true });
    const adminUser = createdUsers[0]._id;

    // DELETE ENTIRE 'GAME' DATABASE
    // await Game.deleteMany();
    // console.log("Data DELETED".red.inverse);

    // MAPPED GAMES

    const newps5Games = ps5Games.map(
      ({
        slug,
        name,
        platforms,
        released,
        background_image,
        rating,
        ratings_count,
        reviews_count,
        metacritic,
        esrb_rating,
        short_screenshots,
        parent_platforms,
        genres,
        id,
      }) => {
        return {
          slug,
          name,
          platforms: platforms.map((eachItem) => eachItem.platform.name),
          released,
          background_image,
          rating,
          ratings_count,
          reviews_count,
          metacriticScore: metacritic,
          age_rating: esrb_rating !== null ? esrb_rating.name : "Not rated",
          screenshots: short_screenshots.map((eachShot) => eachShot.image),
          parent_platforms: parent_platforms.map(
            (eachItem) => eachItem.platform.name
          ),
          genres: genres.map((eachGenre) => eachGenre.name),
          gameID: id,
          category: "Video Game",
          platform: "PS5",
          user: adminUser,
          gameDescription: "",
        };
      }
    );

    const newps4Games = ps4Games.map(
      ({
        slug,
        name,
        platforms,
        released,
        background_image,
        rating,
        ratings_count,
        reviews_count,
        metacritic,
        esrb_rating,
        short_screenshots,
        parent_platforms,
        genres,
        id,
      }) => {
        return {
          slug,
          name,
          platforms: platforms.map((eachItem) => eachItem.platform.name),
          released,
          background_image,
          rating,
          ratings_count,
          reviews_count,
          metacriticScore: metacritic,
          age_rating: esrb_rating !== null ? esrb_rating.name : "Not rated",
          screenshots: short_screenshots.map((eachShot) => eachShot.image),
          parent_platforms: parent_platforms.map(
            (eachItem) => eachItem.platform.name
          ),
          genres: genres.map((eachGenre) => eachGenre.name),
          gameID: id,
          category: "Video Game",
          platform: "PS4",
          user: adminUser,
          gameDescription: "",
        };
      }
    );

    const newXboxSeriesGames = xboxSeries.map(
      ({
        slug,
        name,
        platforms,
        released,
        background_image,
        rating,
        ratings_count,
        reviews_count,
        metacritic,
        esrb_rating,
        short_screenshots,
        parent_platforms,
        genres,
        id,
      }) => {
        return {
          slug,
          name,
          platforms: platforms.map((eachItem) => eachItem.platform.name),
          released,
          background_image,
          rating,
          ratings_count,
          reviews_count,
          metacriticScore: metacritic,
          age_rating: esrb_rating !== null ? esrb_rating.name : "Not rated",
          screenshots: short_screenshots.map((eachShot) => eachShot.image),
          parent_platforms: parent_platforms.map(
            (eachItem) => eachItem.platform.name
          ),
          genres: genres.map((eachGenre) => eachGenre.name),
          gameID: id,
          category: "Video Game",
          platform: "Xbox Series X|S",
          user: adminUser,
          gameDescription: "",
        };
      }
    );

    const newXboxOneGames = xboxOneGames.map(
      ({
        slug,
        name,
        platforms,
        released,
        background_image,
        rating,
        ratings_count,
        reviews_count,
        metacritic,
        esrb_rating,
        short_screenshots,
        parent_platforms,
        genres,
        id,
      }) => {
        return {
          slug,
          name,
          platforms: platforms.map((eachItem) => eachItem.platform.name),
          released,
          background_image,
          rating,
          ratings_count,
          reviews_count,
          metacriticScore: metacritic,
          age_rating: esrb_rating !== null ? esrb_rating.name : "Not rated",
          screenshots: short_screenshots.map((eachShot) => eachShot.image),
          parent_platforms: parent_platforms.map(
            (eachItem) => eachItem.platform.name
          ),
          genres: genres.map((eachGenre) => eachGenre.name),
          gameID: id,
          category: "Video Game",
          platform: "Xbox One",
          user: adminUser,
          gameDescription: "",
        };
      }
    );

    const newSwitchGames = switchGames.map(
      ({
        slug,
        name,
        platforms,
        released,
        background_image,
        rating,
        ratings_count,
        reviews_count,
        metacritic,
        esrb_rating,
        short_screenshots,
        parent_platforms,
        genres,
        id,
      }) => {
        return {
          slug,
          name,
          platforms: platforms.map((eachItem) => eachItem.platform.name),
          released,
          background_image,
          rating,
          ratings_count,
          reviews_count,
          metacriticScore: metacritic,
          age_rating: esrb_rating !== null ? esrb_rating.name : "Not rated",
          screenshots: short_screenshots.map((eachShot) => eachShot.image),
          parent_platforms: parent_platforms.map(
            (eachItem) => eachItem.platform.name
          ),
          genres: genres.map((eachGenre) => eachGenre.name),
          gameID: id,
          category: "Video Game",
          platform: "Nintendo Switch",
          user: adminUser,
          gameDescription: "",
        };
      }
    );

    const mergedResults = [
      ...newps5Games,
      ...newps4Games,
      ...newXboxSeriesGames,
      ...newXboxOneGames,
      ...newSwitchGames,
    ];

    // REMOVE DUPLICATES using SET
    const set = new Set();
    const finalResult = mergedResults.filter((obj) => {
      const duplicate = set.has(obj.gameID);
      set.add(obj.gameID);
      return duplicate;
    });

    // finalResult.forEach((val) => console.log(val.name));
    await Game.insertMany(finalResult);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse.bold);
    process.exit(1);
  }
};

// importData();

const importSingleGame = async () => {
  try {
    await Game.create({
      slug: bogusData[0].slug,
      name: bogusData[0].name,
      platforms: bogusData[0].platforms.map(
        (eachItem) => eachItem.platform.name
      ),
      released: bogusData[0].released,
      background_image: bogusData[0].background_image,
      rating: bogusData[0].rating,
      ratings_count: bogusData[0].ratings_count,
      reviews_count: bogusData[0].reviews_count,
      metacriticScore: bogusData[0].metacritic,
      age_rating:
        bogusData[0].esrb_rating !== null
          ? bogusData[0].esrb_rating.name
          : "Not rated",
      screenshots: bogusData[0].short_screenshots.map(
        (eachShot) => eachShot.image
      ),
      parent_platforms: bogusData[0].parent_platforms.map(
        (eachItem) => eachItem.platform.name
      ),
      genres: bogusData[0].genres.map((eachGenre) => eachGenre.name),
      gameID: bogusData[0].id,
      category: "Video Game",
      platform: "6107191c56131a1d940acb55",
      description: bogusData[0].description,
      publisher: bogusData[0].publisher,
      developer: bogusData[0].developer,
    });
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
// importSingleGame();
