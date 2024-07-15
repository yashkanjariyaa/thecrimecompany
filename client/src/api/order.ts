import axiosInstance from "./instances/axiosInstance";

const getOrders = async (orderId: string) => {
  try {
    const response = await axiosInstance.get("/order", {
      params: { id: orderId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createOrder = async (
  userId: string,
  items: any[],
  totalPrice: number,
  status: string
) => {
  try {
    const response = await axiosInstance.post("/order", {
      userId,
      items,
      totalPrice,
      status,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteOrder = async (orderId: string) => {
  try {
    const response = await axiosInstance.delete("/order", {
      params: { id: orderId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getOrders,
  createOrder,
  deleteOrder,
};
