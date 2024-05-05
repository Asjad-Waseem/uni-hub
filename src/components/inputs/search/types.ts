import { ChangeEvent, MouseEvent } from "react";

export interface SearchBarProps {
  searchValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  toggleSearch: (
    event: MouseEvent<HTMLButtonElement | HTMLSpanElement>
  ) => void;
  isActive: boolean;
}
