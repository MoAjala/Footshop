import express from "express";
import { getProductBySearch } from "../controllers/search.js";

const router = express.Router();

//SEARCH PRODUCT
router.get("/search", getProductBySearch);

export default router;
