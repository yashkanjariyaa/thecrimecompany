import axiosInstance from "./instances/axiosInstance";

const getProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getProducts };
