import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';

import authRoute from "./routes/auth.route.js";
import usersRoute from "./routes/users.route.js";
import bannersRoute from "./routes/banners.route.js";
import categoryRoute from "./routes/category.route.js";

const app = express();
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUND_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})
export { cloudinary }

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ 
  origin: true, 
  // credentials: false,
}));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/banners", bannersRoute);
app.use("/api/category", categoryRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(8080, () => {
  connectDB();
  console.log("Backend server is running!");
});
