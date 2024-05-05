import { University } from "types/commonTypes";

export interface UniversityCardProps {
  showDetailedView?: boolean;
  index?: number;
  university: University;
  handleClick: (name: string) => void;
}
