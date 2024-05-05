import axios from "axios";
// config
import { BASE_URL } from "../../config-global";
import { UI_MESSAGES } from "constants";

// ----------------------------------------------------------------------

const { ERRORS } = UI_MESSAGES;

const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) =>
    Promise.reject(
      (err.response && err.response.data) || ERRORS.somethingWentWrong
    )
);

export default axiosInstance;
