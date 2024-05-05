import "assets/styles/components/Header.css";

import { Link } from "react-router-dom";

import { UI_LABELS } from "constants";
import UniHub from "assets/logos/uni-hub.png";

const Header = (): JSX.Element => {
  const { headerTitle } = UI_LABELS;
  return (
    <div className="header" data-testid="header">
      <Link
        data-testid="header-link"
        to="/"
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          alignItems: "center",
        }}
      >
        <img
          data-testid="header-logo"
          className="header-logo"
          src={UniHub}
          alt="header-logo-alt"
        />
        <h3 data-testid="header-title">{headerTitle}</h3>
      </Link>
    </div>
  );
};

export default Header;
