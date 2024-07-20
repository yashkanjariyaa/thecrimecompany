import axiosInstance from "./instances/axiosInstance";
const baseURLCart = "/api/cart";
const getCart = async (userId: string) => {
  try {
    const response = await axiosInstance.get(baseURLCart, {
      params: { id: userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createCart = async (userId: string, items: any[]) => {
  try {
    const response = await axiosInstance.post(baseURLCart, {
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
    const response = await axiosInstance.post(baseURLCart, {
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
    const response = await axiosInstance.delete(baseURLCart, {
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
