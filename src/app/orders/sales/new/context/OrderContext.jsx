"use client";
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState({
    items: [], // محصولات انتخاب شده
    customer: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const addItem = (item) => {
    setOrder((prev) => ({
      ...prev,
      items: [...prev.items, item],
    }));
  };

  const removeItem = (id) => {
    setOrder((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.part_id !== id),
    }));
  };

  const updateCustomer = (data) => {
    setOrder((prev) => ({
      ...prev,
      customer: { ...prev.customer, ...data },
    }));
  };

  return (
    <OrderContext.Provider
      value={{ order, addItem, removeItem, updateCustomer }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);
