import "assets/styles/sections/ListingSection.css";

import UniversityCard from "@components/cards/universityCard";
import { University } from "types/commonTypes";
import { UniversitiesList } from "./types";

const ListingSection = ({
  universitiesList,
  handleClick,
}: UniversitiesList): JSX.Element => {
  return (
    <div data-testid="listing-container" className="listing-container">
      {universitiesList.map((university: University, index: number) => (
        <UniversityCard
          key={index}
          index={index}
          university={university}
          handleClick={() => handleClick(university.name)}
        />
      ))}
    </div>
  );
};

export default ListingSection;
