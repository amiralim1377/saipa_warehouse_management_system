import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";
import { getRacksByAisle } from "../services/getRacksByAisle";

export const useRacksByAisle = (control) => {
  const selectedAisleId = useWatch({ control, name: "aisle" }) || null;

  const query = useQuery({
    queryKey: ["racks", selectedAisleId],
    queryFn: () => getRacksByAisle(selectedAisleId),
    enabled: !!selectedAisleId,
    placeholderData: [],
  });

  return {
    selectedAisleId,
    racks: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
