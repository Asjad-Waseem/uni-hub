// Import necessary tools and services
import axios from "axios";
import axiosMockAdapter from "axios-mock-adapter";
import UniversitiesService from "./universitiesService";

// Mock for axios
const mock = new axiosMockAdapter(axios);

// Constants to use in tests
const mockData = [
  { id: 1, name: "University A" },
  { id: 2, name: "University B" },
];

// Mock for UI_MESSAGES and STORAGE_KEYS
jest.mock("constants", () => ({
  UI_MESSAGES: {
    ERRORS: {
      fetchUniversitiesNoCacheFailure:
        "Failed to fetch and no cache available.",
    },
    CONSOLE_LOGS: {
      apiResponse: "API response received.",
    },
  },
  STORAGE_KEYS: {
    universitiesList: "universitiesList",
  },
}));

// Improved Mock local storage
beforeEach(() => {
  // @ts-expect-error need to add node to ts config.json modules to allow the usage of global object
  global.localStorage = {
    store: {},
    // @ts-expect-error type to be assigned
    getItem(key) {
      return this.store[key] || null;
    },
    // @ts-expect-error type to be assigned
    setItem(key, value) {
      this.store[key] = value.toString();
    },
    clear() {
      this.store = {};
    },
  };
  mock.reset();
});

// Start of test suite
describe("UniversitiesService", () => {
  it("fetches universities and returns data when the API call succeeds", async () => {
    mock.onGet("").reply(200, mockData);
    const data = await UniversitiesService.fetchUniversitiesList();
    expect(data).toEqual(mockData);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem("universitiesList")).toEqual(
      JSON.stringify(mockData)
    );
  });

  it("fetches universities and returns cached data when the API call fails", async () => {
    localStorage.setItem("universitiesList", JSON.stringify(mockData));
    mock.onGet("").networkError();
    await expect(UniversitiesService.fetchUniversitiesList()).rejects.toThrow(
      "Failed to fetch and no cache available."
    );
    expect(localStorage.getItem("universitiesList")).toEqual(
      JSON.stringify(mockData)
    );
  });
});
