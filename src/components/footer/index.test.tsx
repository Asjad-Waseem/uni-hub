import { render, screen } from "@testing-library/react";
import Footer from "./index";

jest.mock("constants", () => ({
  UI_LABELS: {
    footerCopyrights: "Copyrights@",
    footerCompany: "Uni Hub Pvt. Ltd.",
  },
}));

describe("Footer Component", () => {
  it("displays the correct footer text with the current year", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    const expectedText = `Copyrights@ ${currentYear} Uni Hub Pvt. Ltd.`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
