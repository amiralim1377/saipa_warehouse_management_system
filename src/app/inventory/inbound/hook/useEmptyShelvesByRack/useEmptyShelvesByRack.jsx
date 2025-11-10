import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";
import { getEmptyShelvesByRack } from "../../services/getEmptyShelvesByRack";

export const useEmptyShelvesByRack = (control) => {
  const selectedRackId = useWatch({ control, name: "rack" }) || null;

  const query = useQuery({
    queryKey: ["emptyShelves", selectedRackId],
    queryFn: () => getEmptyShelvesByRack(selectedRackId),
    enabled: !!selectedRackId && selectedRackId !== "all",
    placeholderData: [],
  });

  return {
    selectedRackId,
    shelves: query.data || [],
    isLoading: query.isLoading,
    error: query.error,
  };
};
