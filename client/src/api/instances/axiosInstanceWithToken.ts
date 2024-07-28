import axios from "axios";

const axiosInstanceWithToken = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache",
    "Accept-Language": "en-US",
  },
});

//request interceptor
axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Logging request
    console.log("Request:", config);
    return config;
  },
  (error) => {
    // Logging request error
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

//response interceptor
axiosInstanceWithToken.interceptors.response.use(
  (response) => {
    // Logging response
    console.log("Response:", response);
    return response;
  },
  async (error) => {
    if (error.response) {
      console.error("Response error:", error.response);

      if (error.response.status === 401) {
        console.error("Unauthorized error. Redirecting to login.");
      } else if (error.response.status === 403) {
        console.error("Forbidden error. You do not have access.");
      }
    } else {
      // Logging general error
      console.error("Error:", error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstanceWithToken;
