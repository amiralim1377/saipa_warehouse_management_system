"use client";
import { createContext, useContext } from "react";

const InventoryOutboundContext = createContext();

export function InventoryOutboundProvider({ children }) {
  return (
    <InventoryOutboundContext.Provider value={{}}>
      {children}
    </InventoryOutboundContext.Provider>
  );
}

export const useInventoryOutbound = () => {
  const context = useContext(InventoryInboundContext);
  if (!context) {
    throw new Error(
      "InventoryOutbound must be used within an InventoryOutboundProvider"
    );
  }
  return context;
};
