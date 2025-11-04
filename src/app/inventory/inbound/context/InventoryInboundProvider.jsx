"use client";
import { createContext, useContext, useState } from "react";

const InventoryInboundContext = createContext();

export function InventoryInboundProvider({
  children,
  categories: initialCategories = [],
  warehouse: initialWarehouse = [],
  suppliers: initialSuppliers = [],
}) {
  const [categories, setCategories] = useState(initialCategories);
  const [warehouses, setWarehouses] = useState(initialWarehouse);
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [inboundType, setInboundType] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);

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
