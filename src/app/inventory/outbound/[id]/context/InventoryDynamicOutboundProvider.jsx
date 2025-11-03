"use client";

import { createContext, useContext, useState } from "react";

const InventoryDynamicOutboundContext = createContext();

export function InventoryDynamicOutboundProvider({
  children,
  customersData: initialCustomersData,
}) {
  const [customersData, setCustomersData] = useState(initialCustomersData);

  return (
    <InventoryDynamicOutboundContext.Provider
      value={{
        customersData,
        setCustomersData,
      }}
    >
      {children}
    </InventoryDynamicOutboundContext.Provider>
  );
}

export const useInventoryDynamicOutbound = () => {
  const context = useContext(InventoryDynamicOutboundContext);
  if (!context) {
    throw new Error(
      "useInventoryDynamicOutbound must be used within an InventoryDynamicOutboundProvider"
    );
  }
  return context;
};
