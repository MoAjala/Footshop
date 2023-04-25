import express from "express";
import Product from "./model/Product.js";
import data from "./Data.js";
import Category from "./model/Category.js";

const router = express.Router();

router.post("/products", async (req, res) => {
  await Product.deleteMany({});
  const sendProducts = await Product.insertMany(data.products);
  res.send({ sendProducts });
});
router.post("/categories", async (req, res) => {
  await Category.deleteMany({});
  const sendCategories = await Category.insertMany(data.categories);
  res.send({ sendCategories });
});
export default router;
