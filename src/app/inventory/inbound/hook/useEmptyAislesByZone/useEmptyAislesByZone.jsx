import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";
import { getEmptyAislesByZone } from "../../services/getEmptyAislesByZone";

export const useEmptyAislesByZone = (control) => {
  const selectedZoneId = useWatch({ control, name: "zone" });

  const query = useQuery({
    queryKey: ["emptyAisles", selectedZoneId],
    queryFn: () => getEmptyAislesByZone(selectedZoneId),
    enabled: !!selectedZoneId && selectedZoneId !== "all",
    placeholderData: [],
  });

  return {
    selectedZoneId,
    aisles: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
