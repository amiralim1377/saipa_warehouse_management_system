import { useAislesByZone } from "@/app/inventory/inbound/hook/useAislesByZone";
import { useRacksByAisle } from "@/app/inventory/inbound/hook/useRacksByAisle";
import { useShelvesByRack } from "@/app/inventory/inbound/hook/useShelvesByRack";
import { useWarehouseZones } from "@/app/inventory/inbound/hook/useWarehouseZones";

export function useWarehouseStructure(control) {
  const { zones, zonesLoading } = useWarehouseZones({ control });
  const { data: aisles, isLoading: aislesLoading } = useAislesByZone(control);
  const { racks, isLoading: racksLoading } = useRacksByAisle(control);
  const { shelves, isLoading: shelvesLoading } = useShelvesByRack(control);

  return {
    zones,
    zonesLoading,
    aisles,
    aislesLoading,
    racks,
    racksLoading,
    shelves,
    shelvesLoading,
  };
}
