import axiosInstance from "@utils/apiInstance";

class UniversitiesService {
  static async fetchUniversitiesList() {
    try {
      const response = await axiosInstance.get("");
      console.log("API Response:", response);

      // Save the fetched data to local storage if the API call is successful
      localStorage.setItem("universitiesList", JSON.stringify(response.data));
      return response.data; // return the data directly
    } catch (error) {
      // Try to retrieve data from local storage in case of API failure
      const cachedData = localStorage.getItem("universitiesList");
      if (cachedData) {
        return JSON.parse(cachedData); // Return cached data if available
      } else {
        // If no cached data is available, throw an error
        throw new Error(
          "Failed to fetch universities list and no cached data available."
        );
      }
    }
  }
}

export default UniversitiesService;
