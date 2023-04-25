import Product from "../model/Product.js";

//getfeaturedproducts
export const getFeaturedProducts = async (req, res) => {
  try {
    const productFeatured = await Product.find({ isFeatured: true });
    if (productFeatured) {
      res.json(productFeatured);
    } else {
      res.status(404);
      throw new Error("Featured Product not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
//get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
//get single product
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
//GET PRODUCTS BY CATEGORY
export const getProductsByCategory = async (req, res, next) => {
  try {
    const products = await Product.find({ category: req.params.categoryid });
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
