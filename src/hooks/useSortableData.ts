import { useMemo, useState } from "react";

import { SortConfig } from "./types";

function useSortableData<T>(items: T[], defaultKey: string): [T[], () => void] {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: defaultKey,
    direction: "ascending",
  });

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        // @ts-ignore
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        // @ts-ignore
        if (a[sortConfig.key] > b[sortConfig.key]) {
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
