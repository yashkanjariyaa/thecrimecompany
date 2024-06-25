import axios from "axios";

interface LogInData {
  email: string;
  password: string;
}

export const login = async (data: LogInData) => {
  try {
    const response = await axios.post("/api/login", {
      email: data.email,
      password: data.password,
    });

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
