export type SortConfig<T> = {
  key: keyof T;
  direction: "ascending" | "descending";
};
