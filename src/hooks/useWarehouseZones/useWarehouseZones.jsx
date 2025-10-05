import { getZonesByWarehouse } from "@/services/getZonesByWarehouse";
import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";

export const useWarehouseZones = ({ control }) => {
  const selectedWarehouseId = useWatch({ control, name: "warehouse" });

  const zonesQuery = useQuery({
    queryKey: ["zones", selectedWarehouseId],
    queryFn: () => getZonesByWarehouse(selectedWarehouseId),
    enabled: !!selectedWarehouseId && selectedWarehouseId !== "all",
  });

  return {
    selectedWarehouseId,
    zones: zonesQuery.data || [],
    zonesLoading: zonesQuery.isLoading,
    zonesError: zonesQuery.error,
  };
};
