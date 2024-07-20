import axiosInstance from "./instances/axiosInstance";
const baseURLProduct = "/api/products";

const getProducts = async (size: number) => {
  try {
    const response = await axiosInstance.get(`${baseURLProduct}?size=${size}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getProducts };
