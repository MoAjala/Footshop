import { instance } from "../config/baseURL";

export const getCategories = async () => {
  const res = await instance.get("/api/categories");
  return res;
};
export const getAllProducts = async () => {
  const res = await instance.get("/api/products");
  return res;
};
export const getFeaturedProducts = async () => {
  const res = await instance.get("/api/products/featured");
  return res;
};
export const getProductsByCategory = async (params) => {
  const res = await instance.get(`/api/products/category/${params}`);
  return res;
};