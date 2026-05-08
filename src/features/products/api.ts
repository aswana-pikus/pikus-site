import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const getProducts = async () => {
  const res = await axios.get(`${API_URL}/products?populate=*`);
  return res.data.data;
};

export const getProduct = async (id: string) => {
  const res = await axios.get(`${API_URL}/products/${id}?populate=*`);
  return res.data.data;
};