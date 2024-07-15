import axiosInstance from "./instances/axiosInstance";

const getCart = async (userId: string) => {
  try {
    const response = await axiosInstance.get("/cart", {
      params: { id: userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createCart = async (userId: string, items: any[]) => {
  try {
    const response = await axiosInstance.post("/cart", {
      userId,
      items,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateCart = async (cartId: string, items: any[]) => {
  try {
    const response = await axiosInstance.post("/cart", {
      id: cartId,
      items,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteCart = async (cartId: string) => {
  try {
    const response = await axiosInstance.delete("/cart", {
      params: { id: cartId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getCart,
  createCart,
  updateCart,
  deleteCart,
};
