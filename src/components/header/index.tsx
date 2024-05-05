import "@assets/styles/components/Header.css";

import { Link } from "react-router-dom";

import UniHub from "@assets/logos/uni-hub.png";

const Header = (): JSX.Element => {
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
        <h3>Uni Hub</h3>
      </Link>
    </div>
  );
};

export default Header;