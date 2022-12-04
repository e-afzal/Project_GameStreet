// PACKAGES
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// DATA
import users from "./data/users.js";
import products from "./data/products.js";

// MODELS
import Order from "./model/orderModel.js";
import Product from "./model/productModel.js";
import User from "./model/userModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // DELETE ALL DATA
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // IMPORT DATA
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}.red.inverse`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
