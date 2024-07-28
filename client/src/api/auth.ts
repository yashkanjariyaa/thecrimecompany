import axiosInstance from "./instances/axiosInstance";

const baseURLAuth = "/api/auth";

const login = async (
  email: string,
  password: string,
  setUser: (user: { email: string }) => void
): Promise<any> => {
  try {
    const response = await axiosInstance.post(`${baseURLAuth}/login`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    setUser({ email });
    return response.data;
  } catch (error) {
    window.alert("Invalid email or password");
    console.log(error);
    throw error;
  }
};

const logout = async (email: string, logout: () => void): Promise<any> => {
  try {
    logout();
    const response = await axiosInstance.post(`${baseURLAuth}/logout`);
    localStorage.removeItem("token");
    window.alert(`${email} logged out`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async (
  email: string,
  password: string,
  setUser: (user: { email: string }) => void
): Promise<any> => {
  try {
    const response = await axiosInstance.post(`${baseURLAuth}/signup`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    setUser({ email });
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
