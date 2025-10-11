"use client";
import { useQuery } from "@tanstack/react-query";
import fetchCustomers from "../../services/fetchCustomers";
import { useOrder } from "../../context/OrderContext";
import { useEffect } from "react";

export default function useCustomers() {
  const { setCustomers } = useOrder();

  const { data, isPending, error } = useQuery({
    queryKey: ["customers"],
    queryFn: fetchCustomers,
  });


  useEffect(() => {
    if (data && data.success) {
      setCustomers(data.data);
    }
  }, [data, setCustomers]);

  return { isPending, error };
}
