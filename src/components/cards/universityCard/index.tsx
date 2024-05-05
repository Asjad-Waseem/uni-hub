import "@assets/styles/components/UniversityCard.css";

import { Link } from "react-router-dom";

import { UniversityCardProps } from "./types";

const UniversityCard = ({
  showDetailedView,
  index,
  university,
  handleClick,
}: UniversityCardProps): JSX.Element => {
  return (
    <div className={`university-card ${university.deleting ? "fade-out" : ""}`}>
      <div className="university-info">
        <h3 className="university-name">{university?.name}</h3>
        <p className="university-code">{university?.alpha_two_code}</p>
        {showDetailedView && (
          <div>
            <p className="university-code">{university?.country}</p>
            <p className="university-code">{university?.["state-province"]}</p>
            <h3>Domains:</h3>
            {university?.domains?.map((domain, index) => (
              <Link key={index} to="/">
                {domain}
              </Link>
            ))}
            <h3>Web Pages:</h3>
            {university?.web_pages?.map((webpage, index) => (
              <Link key={index} to="/">
                {webpage}
              </Link>
            ))}
          </div>
        )}
      </div>
      {!showDetailedView && (
        <div className="university-card-actions">
          <Link to={`/university/details/${index}`} className="details-link">
            View Details
          </Link>
          <button
            className="delete-btn"
            onClick={() => handleClick(university?.name)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default UniversityCard;
