import { getRacksByAisle } from "@/services/getRacksByAisle";
import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";

export const useRacksByAisle = (control) => {
  const selectedAisleId = useWatch({ control, name: "aisle" }) || null;

  const query = useQuery({
    queryKey: ["racks", selectedAisleId],
    queryFn: () => getRacksByAisle(selectedAisleId),
    enabled: !!selectedAisleId && selectedAisleId !== "all",
    placeholderData: [],
  });

  return {
    selectedAisleId,
    racks: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
