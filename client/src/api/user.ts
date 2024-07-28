import axiosInstance from "./instances/axiosInstanceWithToken";
const baseURLUser = "/api/user";

const getUserData = async (email: string) => {
  try {
    if (email === null) {
      throw new Error("Email is null");
    }
    const response = await axiosInstance.get(
      `${baseURLUser}?email=${email}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createUser = async (userData: UserData) => {
  try {
    const response = await axiosInstance.post(baseURLUser, {
      name: userData.name,
      age: userData.age,
      email: userData.email,
      mobile: userData.mobile,
      address: userData.address,
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
    const response = await axiosInstance.delete(
      `${baseURLUser}?id=${id}`
    );
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
