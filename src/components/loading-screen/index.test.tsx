import { render, screen } from "@testing-library/react";
import LoadingScreen from "./index";

describe("LoadingScreen Component", () => {
  it("renders the loading screen and spinner", () => {
    render(<LoadingScreen />);
    const loadingScreen = screen.getByTestId("loading-screen");
    const loadingSpinner = screen.getByTestId("loading-spinner");

    expect(loadingScreen).toBeInTheDocument();
    expect(loadingSpinner).toBeInTheDocument();
  });
});
