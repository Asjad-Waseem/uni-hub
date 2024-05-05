import "@assets/styles/pages/ListingPage.css";

import React, { useState, useEffect, ChangeEvent } from "react";

import { ListingSection } from "@sections";
import { SearchBar } from "@components";
import { University } from "types/commonTypes";
import { UniversitiesService } from "@api/services";
import useDebounce from "hooks/useDebounce";
import useSortableData from "hooks/useSortableData";

const ListingPage = (): JSX.Element => {
  const { fetchUniversitiesList } = UniversitiesService;

  const [universitiesList, setUniversitiesList] = useState<University[]>([]);
  const [displayUniversityList, setDisplayUniversityList] = useState<
    University[]
  >([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSorted, setIsSorted] = useState<boolean>(false);

  const debouncedSearchTerm = useDebounce<string>(searchInput, 500);

  const [sortedItems, toggleSort] = useSortableData(universitiesList, "name");

  const getUniversitiesList = async () => {
    try {
      const data = await fetchUniversitiesList();
      setUniversitiesList(data);
      setDisplayUniversityList(data);
    } catch (err) {
      console.error("Failed to fetch universities data:", err);
    }
  };

  const toggleSearch = (
    event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>
  ) => {
    setIsActive(!isActive);
    setSearchInput(""); // Clear search input when closing search
    event.preventDefault();
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const deleteUniversityItem = (name: string) => {
    const newList = displayUniversityList.map((uni) =>
      uni.name === name ? { ...uni, deleting: true } : uni
    );
    setDisplayUniversityList(newList);

    // Wait for animation to complete before removing item from the list
    setTimeout(() => {
      const updatedUniversitiesList = newList.filter(
        (university) => university.name !== name
      );
      setUniversitiesList(updatedUniversitiesList);
      setDisplayUniversityList(updatedUniversitiesList);
    }, 300); // Ensure this matches the animation duration
  };

  useEffect(() => {
    const baseList = isSorted ? [...sortedItems] : [...universitiesList];

    const filteredList = baseList.filter((university) =>
      Object.values(university).some((value) =>
        value
          ?.toString()
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      )
    );
    setDisplayUniversityList(filteredList);
  }, [debouncedSearchTerm, universitiesList, isSorted]);

  useEffect(() => {
    getUniversitiesList();
  }, []);

  return (
    <div className="listing-page">
      <h1 className="listing-page title">Universities List</h1>
      <button
        className="listing-page sort-btn"
        onClick={() => {
          toggleSort;
          setIsSorted(!isSorted);
        }}
      >
        {isSorted ? "Unsort Universities" : "Sort Universities Alphabetically"}
      </button>
      <SearchBar
        isActive={isActive}
        searchValue={searchInput}
        toggleSearch={toggleSearch}
        handleChange={handleSearchChange}
      />
      <ListingSection
        universitiesList={displayUniversityList}
        handleClick={deleteUniversityItem}
      />
    </div>
  );
};

export default ListingPage;
