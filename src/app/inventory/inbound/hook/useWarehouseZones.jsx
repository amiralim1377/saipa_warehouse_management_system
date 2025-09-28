import { useQuery } from "@tanstack/react-query";
import { useFormContext, useWatch } from "react-hook-form";
import { getZonesByWarehouse } from "../services/getZonesByWarehouse";

export const useWarehouseZones = ({ control }) => {
  const selectedWarehouseId = useWatch({ control, name: "warehouse" });

  const zonesQuery = useQuery({
    queryKey: ["zones", selectedWarehouseId],
    queryFn: () => getZonesByWarehouse(selectedWarehouseId),
    enabled: !!selectedWarehouseId,
  });

  return {
    selectedWarehouseId,
    zones: zonesQuery.data || [],
    zonesLoading: zonesQuery.isLoading,
    zonesError: zonesQuery.error,
  };
};
