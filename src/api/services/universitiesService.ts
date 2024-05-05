import axiosInstance from "@utils/apiInstance";

import { UI_MESSAGES, STORAGE_KEYS } from "constants";

class UniversitiesService {
  static async fetchUniversitiesList() {
    // const { CONSOLE_LOGS } = UI_MESSAGES;

    // const { CONSOLE_LOGS, ERRORS } = UI_MESSAGES;
    const { universitiesList } = STORAGE_KEYS;
    try {
      const response = await axiosInstance.get("");
      console.log(UI_MESSAGES.CONSOLE_LOGS.apiResponse, response);

      // Save the fetched data to local storage if the API call is successful
      localStorage.setItem(universitiesList, JSON.stringify(response.data));

      return response.data; // return the data directly
    } catch (error) {
      // Try to retrieve data from local storage in case of API failure
      const cachedData = localStorage.getItem(universitiesList);
      if (cachedData) {
        return JSON.parse(cachedData); // Return cached data if available
      } else {
        // If no cached data is available, throw an error
        throw new Error(UI_MESSAGES.ERRORS.fetchUniversitiesNoCacheFailure);
      }
    }
  }
}

export default UniversitiesService;
