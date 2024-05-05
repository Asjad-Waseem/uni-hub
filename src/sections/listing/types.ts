import { University } from "types/commonTypes";

export interface UniversitiesList {
  universitiesList: University[];
  handleClick: (name: string) => void;
}
