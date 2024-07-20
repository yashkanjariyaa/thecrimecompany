import axiosInstance from "./instances/axiosInstance";
const baseURLUser = "/api/user";

const getUserData = async (id: string) => {
  try {
    const response = await axiosInstance.get(`${baseURLUser}?id=${id}`);
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
    const response = await axiosInstance.post(baseURLUser, {
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
    const response = await axiosInstance.put(
      `${baseURLUser}?id=${id}`,
      updates
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`${baseURLUser}?id=${id}`);
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
