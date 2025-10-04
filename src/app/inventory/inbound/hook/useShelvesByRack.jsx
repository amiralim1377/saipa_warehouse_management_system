import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";
import { getShelvesByRack } from "../services/getShelvesByRack";

export const useShelvesByRack = (control) => {
  const selectedRackId = useWatch({ control, name: "rack" }) || null;

  const query = useQuery({
    queryKey: ["shelves", selectedRackId],
    queryFn: () => getShelvesByRack(selectedRackId),
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
