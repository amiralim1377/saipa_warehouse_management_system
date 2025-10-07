import { useQuery } from "@tanstack/react-query";
import { fetchWarehouses } from "../../services/fetchWarehouses";

export function useWarehouses() {
  const { data, isPending, error } = useQuery({
    queryKey: ["warehouses"],
    queryFn: fetchWarehouses,
  });

  return { data, isPending, error };
}
