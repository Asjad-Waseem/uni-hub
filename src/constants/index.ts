export const UI_LABELS = {
  headerTitle: "Uni Hub",
  footerCopyrights: "Copyrights@",
  footerCompany: "Uni Hub Pvt. Ltd.",
  listingPageTitle: "Universities List",
  sortUniversities: "Sort Universities Alphabetically",
  unsortUniversities: "Unsort Universities",
  detailsPageTitle: "University Details",
  returnToList: "Return to list",
  universityName: "Name",
  universityCode: "University Code",
  country: "Country",
  stateProvince: "State Province",
  domains: "Domains",
  webPages: "Web Pages",
  viewDetails: "View Details",
  deleteBtnText: "Delete",
  typeToSearch: "Type to search",
};

export const UI_MESSAGES = {
  CONSOLE_LOGS: {
    apiResponse: "Api Response",
  },
  ERRORS: {
    fetchUniversitiesFailure: "Failed to fetch universities data:", // General API failure
    fetchUniversitiesNoCacheFailure:
      "Failed to fetch universities list and no cached data available.", // API failure and no cache
    somethingWentWrong: "Something went wrong",
  },
  INFO: {
    loadingUniversityDetails: "Loading university details...",
    noUniversitiesFoundText: "No universities found!",
  },
};

export const STORAGE_KEYS = {
  universitiesList: "universitiesList",
  currentUniversity: "currentUniversity",
};
