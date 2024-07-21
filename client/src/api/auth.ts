import axiosInstanceForAuth from "./instances/axiosInstanceForAuth";

const baseURLAuth = "/api/auth";

const login = async (
  email: string,
  password: string,
  setUser: (user: { email: string }) => void
): Promise<any> => {
  try {
    const response = await axiosInstanceForAuth.post(`${baseURLAuth}/login`, {
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

const logout = async (user: User, logout: () => void): Promise<any> => {
  try {
    logout();
    const response = await axiosInstanceForAuth.post(`${baseURLAuth}/logout`);
    localStorage.removeItem("token");
    window.alert(`${user.email} logged out`);
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
    const response = await axiosInstanceForAuth.post(`${baseURLAuth}/signup`, {
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
