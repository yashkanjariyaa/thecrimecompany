import axios from "axios";

const axiosInstanceForAuth = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache",
    "Accept-Language": "en-US",
  },
});

export default axiosInstanceForAuth;
