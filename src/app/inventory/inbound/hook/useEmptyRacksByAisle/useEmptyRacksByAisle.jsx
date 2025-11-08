import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";
import { getEmptyRacksByAisle } from "../../services/getEmptyRacksByAisle";

export const useEmptyRacksByAisle = (control) => {
  const selectedAisleId = useWatch({ control, name: "aisle" }) || null;

  const query = useQuery({
    queryKey: ["emptyRacks", selectedAisleId],
    queryFn: () => getEmptyRacksByAisle(selectedAisleId),
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
