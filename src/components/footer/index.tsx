import "@assets/styles/components/Footer.css";

import { UI_LABELS } from "constants";

const Footer = (): JSX.Element => {
  const { footerCopyrights, footerCompany } = UI_LABELS;
  const date = new Date();
  return (
    <footer className="footer">
      <p>
        {footerCopyrights} {date.getFullYear()} {footerCompany}{" "}
      </p>
    </footer>
  );
};

export default Footer;
