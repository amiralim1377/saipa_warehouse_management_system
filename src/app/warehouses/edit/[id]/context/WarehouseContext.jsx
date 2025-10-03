"use client";
import { createContext, useContext } from "react";
import { useWarehouseData } from "../hook/useWarehouseData/useWarehouseData";

const WarehouseContext = createContext(null);

export function WarehouseProvider({ targetWarehouse, children }) {
  console.log(targetWarehouse);
  const { warehouse, zones, aisles, racks, shelves } =
    useWarehouseData(targetWarehouse);
  return (
    <WarehouseContext.Provider
      value={{ warehouse, zones, aisles, racks, shelves }}
    >
      {children}
    </WarehouseContext.Provider>
  );
}

export function useWarehouse() {
  return useContext(WarehouseContext);
}
