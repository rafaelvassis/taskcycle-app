import { useMemo, useState } from "react";

type SortDirection = "asc" | "desc";

type SortConfig<T> = {
  key: keyof T;
  direction: SortDirection;
} | null;

export function useSortTableData<T>(
  items: T[],
  initialSort?: { key: keyof T; direction: SortDirection },
) {
  const [SortConfig, setSortConfig] = useState<SortConfig<T>>(
    initialSort ?? null,
  );

  const sortedData = useMemo(() => {
    if (!SortConfig) return items;

    const { key, direction } = SortConfig;

    return [...items].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (valueA < valueB) return direction === "asc" ? -1 : 1;
      if (valueA > valueB) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [items, SortConfig]);

  function requestSort(key: keyof T) {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }

      return {
        key,
        direction: "asc",
      };
    });
  }

  function getSortIcon(key: keyof T) {
    if (!SortConfig || SortConfig.key !== key) return null;
    return SortConfig.direction === "asc" ? " ▲" : " ▼";
  }

  return {
    sortedData,
    requestSort,
    getSortIcon,
    SortConfig,
  };
}
