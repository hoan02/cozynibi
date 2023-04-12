import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";


const app = express();
dotenv.config();

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
  // credentials: true 
}));
app.use(express.json({ limit: "50mb" }));


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8080, () => {
  connectDB();
  console.log("Backend server is running!");
});
