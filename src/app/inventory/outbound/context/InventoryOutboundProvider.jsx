"use client";
import { createContext, useContext, useState } from "react";

const InventoryOutboundContext = createContext();

export function InventoryOutboundProvider({
  children,
  warehouses: initialWarehouses,
  categories: initialCategories,
  customersData: initialcustomersData,
}) {
  const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [categories, setCategories] = useState(initialCategories);
  const [customersData, setCustomersData] = useState(initialcustomersData);

  return (
    <InventoryOutboundContext.Provider
      value={{
        warehouses,
        setWarehouses,
        categories,
        setCategories,
        customersData,
        setCustomersData,
      }}
    >
      {children}
    </InventoryOutboundContext.Provider>
  );
}

export const useInventoryOutbound = () => {
  const context = useContext(InventoryOutboundContext);
  if (!context) {
    throw new Error(
      "InventoryOutbound must be used within an InventoryOutboundProvider"
    );
  }
  return context;
};
