import axios from "axios";

interface SignupData {
  email: string;
  password: string;
}

export const signup = async (data: SignupData) => {
  try {
    const response = await axios.post(
      "/api/signup",
      {
        email: data.email,
        password: data.password,
      }
    );
    const token = response.data.token;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};
