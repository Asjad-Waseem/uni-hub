import { useMemo, useState } from "react";

import { SortConfig } from "./types";

function useSortableData<T extends object>(
  items: T[],
  defaultKey: keyof T
): [T[], () => void] {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: defaultKey,
    direction: "ascending",
  });

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const toggleSort = () => {
    setSortConfig((oldConfig) => ({
      key: defaultKey,
      direction:
        oldConfig.direction === "ascending" ? "descending" : "ascending",
    }));
  };

  return [sortedItems, toggleSort];
}

export default useSortableData;
