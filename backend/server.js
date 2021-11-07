// PACKAGES
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import path from "path";

// ROUTES IMPORT
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

const app = express();

// BODY PARSER
app.use(express.json());
dotenv.config();

// CONNECT TO 'MONGODB'
connectDB();

// MORGAN
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// API ROUTES
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// If environment is 'PRODUCTION', 'index.html' from
// 'FrontEnd' build folder to be loaded
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// 404 ERROR HANDLER
app.use(notFound);
// ERROR MIDDLEWARE
app.use(errorHandler);

// SERVER - LISTEN
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV;
app.listen(PORT, () =>
  console.log(
    `Server running in ${environment} mode on PORT ${PORT}`.yellow.bold
  )
);
