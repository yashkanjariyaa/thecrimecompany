import axiosInstance from "./instances/axiosInstance";

const getUserData = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/user?id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createUser = async (
  name: string,
  email: string,
  mobile: string,
  address: string,
  age: number
) => {
  try {
    const response = await axiosInstance.post("/user", {
      name,
      email,
      mobile,
      address,
      age,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateUserData = async (id: string, updates: any) => {
  try {
    const response = await axiosInstance.put(`/user?id=${id}`, updates);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/user?id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getUserData,
  createUser,
  updateUserData,
  deleteUser,
};
