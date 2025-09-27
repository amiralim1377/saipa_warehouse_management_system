"use client";
import { createContext, useContext, useState } from "react";

const InventoryInboundContext = createContext();

export function InventoryInboundProvider({
  children,
  initialCategories = [],
  warehouse: initialWarehouse = [],
}) {
  const [categories, setCategories] = useState(initialCategories);
  const [warehouses, setWarehouses] = useState(initialWarehouse);
  const [subcategories, setSubcategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inboundType, setInboundType] = useState("");

  return (
    <InventoryInboundContext.Provider
      value={{
        categories,
        setCategories,
        subcategories,
        setSubcategories,
        warehouses,
        setWarehouses,
        inboundType,
        setInboundType,
        suppliers,
        setSuppliers,
        loading,
        setLoading,
      }}
    >
      {children}
    </InventoryInboundContext.Provider>
  );
}

export const useInventoryInbound = () => {
  const context = useContext(InventoryInboundContext);
  if (!context) {
    throw new Error(
      "useInventoryInbound must be used within an InventoryInboundProvider"
    );
  }
  return context;
};
