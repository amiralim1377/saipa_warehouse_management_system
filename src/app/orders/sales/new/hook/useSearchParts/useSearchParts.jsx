"use client";
import { useOrder } from "../../context/OrderContext";
import { getSearchProducts } from "@/services/getSearchProducts";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useSearchParts() {
  const { setSearchResults } = useOrder();
  const searchParams = useSearchParams();

  const filters = {
    query: searchParams.get("query") || "",
    warehouse: searchParams.get("warehouse") || "all",
    zone: searchParams.get("zone") || "all",
    aisle: searchParams.get("aisle") || "all",
    rack: searchParams.get("rack") || "all",
    shelf: searchParams.get("shelf") || "all",
    category: searchParams.get("category") || "all",
    subcategory: searchParams.get("subcategory") || "all",
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchParts", filters],
    queryFn: () => getSearchProducts(filters),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (data) {
      setSearchResults(data.data);
    }
  }, [data, setSearchResults]);

  return { isLoading, error };
}
