"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function useProductsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("categories") || null;
  const initialSubCategory = searchParams.get("subcategories") || null;
  const initialPage = Number(searchParams.get("page")) || 1;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState(initialSubCategory);
  const [pageNum, setPageNum] = useState(initialPage);

  const updateRoute = (category, subCategory, page) => {
    const query = new URLSearchParams();
    if (category) query.set("categories", category);
    if (subCategory) query.set("subcategories", subCategory);
    if (page !== undefined && page !== null) query.set("page", page);
    router.push(`/products?${query.toString()}`);
  };

  return {
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    pageNum,
    setPageNum,
    updateRoute,
  };
}

export default useProductsFilter;
