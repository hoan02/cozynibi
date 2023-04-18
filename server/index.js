import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import accountRoute from "./routes/account.route.js";
import authRoute from "./routes/auth.route.js";
import bannerRoute from "./routes/banner.route.js";
import bookingRoute from "./routes/booking.route.js";
import contactRoute from "./routes/contact.route.js";
import foodRoute from "./routes/food.route.js";
import imageRoute from "./routes/image.route.js";
import postRoute from "./routes/post.route.js";
import tourRoute from "./routes/tour.route.js";

const app = express();
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUND_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});
export { cloudinary };

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

app.use(
  cors({
    origin: true,
    // credentials: false,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use("/api/account", accountRoute);
app.use("/api/auth", authRoute);
app.use("/api/banner", bannerRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/contact", contactRoute);
app.use("/api/food", foodRoute);
app.use("/api/image", imageRoute);
app.use("/api/post", postRoute);
app.use("/api/tour", tourRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

app.listen(8080, () => {
  connectDB();
  console.log("Backend server is running!");
});
