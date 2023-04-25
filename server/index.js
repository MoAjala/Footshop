import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import sendProducts from "./SendToMongo.js";
import { notFound, errorHandler } from "./config/error.js";
import productRoutes from "./routes/product.js";
import authRoutes from "./routes/authUser.js"
import searchRoutes from "./routes/search.js"
import categoryRoutes from "./routes/categories.js"


const app = express();
dotenv.config();
app.use(cors());

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Mongodb Connected Successfully");
    })
    .catch((err) => {
      throw err;
    });
};
app.use(express.json());

//api
app.use("/api/import", sendProducts);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/catalog", searchRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("app is running");
});

//error handler
app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  connect();
  console.log("connected to server");
});