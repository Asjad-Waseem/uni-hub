import "@assets/styles/pages/DetailsPage.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UniversityCard } from "@components";
import { UI_LABELS, UI_MESSAGES, STORAGE_KEYS } from "constants";

const DetailsPage = (): JSX.Element => {
  const navigate = useNavigate();

  const { detailsPageTitle, returnToList } = UI_LABELS;
  const { INFO } = UI_MESSAGES;
  const { currentUniversity } = STORAGE_KEYS;

  const [university, setUniversity] = useState(null);

  useEffect(() => {
    // Retrieve the university data from localStorage
    const storedData = localStorage.getItem(currentUniversity);

    if (storedData) {
      setUniversity(JSON.parse(storedData));
    } else {
      // Handle cases where no data is available
      navigate("/"); // Redirect back to the list if no data is found
    }
  }, [navigate]);

  if (!university) {
    // Display loading or not found message while data is loading or if no data
    return <div>{INFO.loadingUniversityDetails}</div>;
  }

  return (
    <div className="listing-page">
      <h1 className="listing-page title">{detailsPageTitle}</h1>
      <button className="listing-page sort-btn" onClick={() => navigate("/")}>
        {returnToList}
      </button>
      <UniversityCard
        showDetailedView={true}
        university={university}
        handleClick={() => {}} // Handle click according to your needs
      />
    </div>
  );
};

export default DetailsPage;
