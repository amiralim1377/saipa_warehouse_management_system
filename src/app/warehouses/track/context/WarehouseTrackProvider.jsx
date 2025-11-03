"use client";
import { createContext, useContext, useState } from "react";

const WarehouseTrackContext = createContext();

export function WarehouseTrackProvider({
  children,
  warehouses: initialWarehouses,
  categories: initialCategories,
}) {
  const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [categories, setCategories] = useState(initialCategories);

  const [filters, setFilters] = useState({
    warehouseId: null,
    zoneId: null,
    aisleId: null,
    rackId: null,
    categoryId: null,
    searchQuery: "",
  });

  return (
    <WarehouseTrackContext.Provider
      value={{
        warehouses,
        setWarehouses,
        categories,
        setCategories,
        filters,
        setFilters,
      }}
    >
      {children}
    </WarehouseTrackContext.Provider>
  );
}

export default WarehouseTrackProvider;

export const useWarehouseTrack = () => {
  const context = useContext(WarehouseTrackContext);
  if (!context) {
    throw new Error(
      "useWarehouseTrack must be used within a WarehouseTrackProvider"
    );
  }
  return context;
};
