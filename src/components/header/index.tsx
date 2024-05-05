import "@assets/styles/components/Header.css";

import { Link } from "react-router-dom";

import { UI_LABELS } from "constants";
import UniHub from "@assets/logos/uni-hub.png";

const Header = (): JSX.Element => {
  const { headerTitle } = UI_LABELS;
  return (
    <div className="header">
      <Link
        to="/"
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          alignItems: "center",
        }}
      >
        <img className="header-logo" src={UniHub} alt="img-alt" />
        <h3>{headerTitle}</h3>
      </Link>
    </div>
  );
};

export default Header;
