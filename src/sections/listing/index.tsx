import "assets/styles/sections/ListingSection.css";

import UniversityCard from "@components/cards/universityCard";
import { University } from "types/commonTypes";
import { UniversitiesList } from "./types";
import { UI_MESSAGES } from "constants";

const ListingSection = ({
  universitiesList,
  handleClick,
}: UniversitiesList): JSX.Element => {
  const { INFO } = UI_MESSAGES;
  return (
    <div data-testid="listing-container" className="listing-container">
      {universitiesList?.length > 0 ? (
        universitiesList.map((university: University, index: number) => (
          <UniversityCard
            key={index}
            index={index}
            university={university}
            handleClick={() => handleClick(university.name)}
          />
        ))
      ) : (
        <h2>{INFO.noUniversitiesFoundText}</h2>
      )}
    </div>
  );
};

export default ListingSection;
