"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const OrderContext = createContext();

export function OrderProvider({
  children,
  warehouses: initialWarehouses,
  categories: initialCategories,
}) {
  const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [categories, setCategories] = useState(initialCategories);
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

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
    toast.success("محصول به لیست فروش اضافه شد");
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
      value={{
        warehouses,
        categories,
        searchResults,
        setSearchResults,
        order,
        addItem,
        removeItem,
        updateCustomer,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext);
