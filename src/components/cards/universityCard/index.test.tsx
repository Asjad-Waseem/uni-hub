import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UniversityCard from "./index";
import { University } from "types/commonTypes";

jest.mock("constants", () => ({
  UI_LABELS: {
    universityName: "Name",
    universityCode: "University Code",
    country: "Country",
    stateProvince: "State Province",
    domains: "Domains",
    webPages: "Web Pages",
    viewDetails: "View Details",
    deleteBtnText: "Delete",
  },
  STORAGE_KEYS: {
    currentUniversity: "currentUniversity",
  },
}));

const mockUniversity: University = {
  name: "Test University",
  alpha_two_code: "TU",
  country: "Testland",
  "state-province": "Test Province",
  domains: ["test.edu"],
  web_pages: ["http://test.edu"],
  deleting: false,
};

describe("UniversityCard Component", () => {
  it("renders detailed view correctly", () => {
    const handleClick = jest.fn();
    render(
      <BrowserRouter>
        <UniversityCard
          showDetailedView={true}
          index={1}
          university={mockUniversity}
          handleClick={handleClick}
        />
      </BrowserRouter>
    );

    // Using a function to ensure node is not null before accessing its properties
    expect(
      screen.getByText((content, node) =>
        node ? node.textContent === "Name: Test University" : false
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, node) =>
        node ? node.textContent === "University Code: TU" : false
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, node) =>
        node ? node.textContent === "Country: Testland" : false
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, node) =>
        node ? node.textContent === "State Province: Test Province" : false
      )
    ).toBeInTheDocument();
  });

  it("triggers handleClick on delete button click", () => {
    const handleClick = jest.fn();
    render(
      <BrowserRouter>
        <UniversityCard
          showDetailedView={false}
          index={1}
          university={mockUniversity}
          handleClick={handleClick}
        />
      </BrowserRouter>
    );

    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalled();
  });

  it("saves university details in localStorage on view details link click", () => {
    Storage.prototype.setItem = jest.fn();
    render(
      <BrowserRouter>
        <UniversityCard
          showDetailedView={false}
          index={1}
          university={mockUniversity}
          handleClick={jest.fn()}
        />
      </BrowserRouter>
    );

    const detailsLink = screen.getByText(/View Details/i);
    fireEvent.click(detailsLink);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "currentUniversity",
      JSON.stringify(mockUniversity)
    );
  });
});
