import axiosInstaceForAuth from "./instances/axiosInstanceForAuth";

const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstaceForAuth.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await axiosInstaceForAuth.post("/auth/logout");
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async (email: string, password: string) => {
  try {
    const response = await axiosInstaceForAuth.post("/auth/signup", {
      email,
      password,
    });
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
