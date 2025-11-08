import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";
import { getEmptyZonesByWarehouse } from "../../services/getEmptyZonesByWarehouse";

export const useEmptyWarehouseZones = ({ control }) => {
  const selectedWarehouseId = useWatch({ control, name: "warehouse" });

  const zonesQuery = useQuery({
    queryKey: ["emptyZones", selectedWarehouseId],
    queryFn: () => getEmptyZonesByWarehouse(selectedWarehouseId),
    enabled: !!selectedWarehouseId && selectedWarehouseId !== "all",
    placeholderData: [],
  });

  return {
    selectedWarehouseId,
    zones: zonesQuery.data || [],
    zonesLoading: zonesQuery.isLoading,
    zonesError: zonesQuery.error,
  };
};
