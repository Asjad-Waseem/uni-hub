import "@assets/styles/components/UniversityCard.css";

import { Link } from "react-router-dom";

import { UniversityCardProps } from "./types";
import { UI_LABELS, STORAGE_KEYS } from "constants";

const UniversityCard = ({
  showDetailedView,
  index,
  university,
  handleClick,
}: UniversityCardProps): JSX.Element => {
  const {
    universityName,
    universityCode,
    country,
    stateProvince,
    domains,
    webPages,
    viewDetails,
    deleteBtnText,
  } = UI_LABELS;

  const { currentUniversity } = STORAGE_KEYS;

  const handleViewDetails = () => {
    localStorage.setItem(currentUniversity, JSON.stringify(university));
  };

  return (
    <div
      className={`university-card ${university.deleting ? "fade-out" : ""} ${
        showDetailedView ? "university-card-expanded" : "university-card-list"
      } `}
    >
      <div className="university-info">
        <h3 className="university-name">
          {showDetailedView && (
            <span className="font-bold">{universityName}: </span>
          )}
          {university?.name}
        </h3>
        <p className="university-property">
          {showDetailedView && (
            <span className="font-bold">{universityCode}: </span>
          )}
          {university?.alpha_two_code}
        </p>
        {showDetailedView && (
          <div>
            <p className="university-property mt-1">
              <span className="font-bold">{country}: </span>
              {university?.country}
            </p>
            <p className="university-property mt-1">
              <span className="font-bold">{stateProvince}: </span>
              {university?.["state-province"]}
            </p>
            <h3 className="university-card-domains mt-1">{domains}:</h3>
            {university?.domains?.map((domain, index) => (
              <Link key={index} to="/">
                {domain}
              </Link>
            ))}
            <h3 className="mt-1">{webPages}:</h3>
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
          <Link
            to={`/university-details/${index}`}
            className="details-link"
            onClick={handleViewDetails}
          >
            {viewDetails}
          </Link>
          <button
            className="delete-btn"
            onClick={() => handleClick(university?.name)}
          >
            {deleteBtnText}
          </button>
        </div>
      )}
    </div>
  );
};

export default UniversityCard;
