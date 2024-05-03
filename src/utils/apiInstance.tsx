import axios from "axios";
// config
import { BASE_URL } from "../../config-global";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) =>
    Promise.reject(
      (err.response && err.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
