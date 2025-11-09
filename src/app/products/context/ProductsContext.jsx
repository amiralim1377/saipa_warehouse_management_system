"use client";

import { createContext, useContext, useState } from "react";
import useProductsFilter from "../hook/useProductsFilter";

const ProductsContext = createContext();

export function ProductsProvider({
  children,
  products: initialProducts = [],

  categories: initialCategories,
  subcategories: initialSubcategories,
}) {
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  const [subcategories, setSubcategories] = useState(initialSubcategories);

  const {
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    pageNum,
    setPageNum,
    updateRoute,
  } = useProductsFilter();

  const value = {
    products,
    setProducts,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    pageNum,
    setPageNum,
    updateRoute,
    categories,
    setCategories,
    subcategories,
    setSubcategories,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
