import axiosInstance from "./instances/axiosInstanceWithToken";
const baseURLOrder = "/api/order";

const getOrders = async (orderId: string) => {
  try {
    const response = await axiosInstance.get(baseURLOrder, {
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
    const response = await axiosInstance.post(baseURLOrder, {
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
    const response = await axiosInstance.delete(baseURLOrder, {
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
