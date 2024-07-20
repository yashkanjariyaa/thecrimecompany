import axiosInstaceForAuth from "./instances/axiosInstanceForAuth";
const baseURLAuth = "/api/auth";
const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstaceForAuth.post(`${baseURLAuth}/login`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await axiosInstaceForAuth.post(`${baseURLAuth}/logout`);
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async (email: string, password: string) => {
  try {
    const response = await axiosInstaceForAuth.post(`${baseURLAuth}/signup`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
  logout,
  signup,
};
