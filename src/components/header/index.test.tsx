import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./index";

jest.mock("constants", () => ({
  UI_LABELS: {
    headerTitle: "Uni Hub",
  },
}));

describe("Header Component", () => {
  it("renders correctly and displays the header title", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("header-link")).toBeInTheDocument();
    expect(screen.getByTestId("header-logo")).toHaveAttribute(
      "alt",
      "header-logo-alt"
    );
    expect(screen.getByTestId("header-title")).toHaveTextContent("Uni Hub");
  });
});
