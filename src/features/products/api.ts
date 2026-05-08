import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const getProducts = async () => {
  const res = await axios.get(`${API_URL}/products?populate=*`);

  return res.data.data.map((item: any) => ({
    id: item.id,
    ...item.attributes,
  }));
};

export const getProduct = async (id: string) => {
  const res = await axios.get(
    `${API_URL}/products?filters[id][$eq]=${id}&populate=*`
  );

  const product = res.data.data?.[0];

  if (!product) return null;

  return {
    id: product.id,
    ...product.attributes,
  };
};