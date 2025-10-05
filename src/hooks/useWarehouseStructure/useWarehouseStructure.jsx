import { useAislesByZone } from "../useAislesByZone/useAislesByZone";
import { useRacksByAisle } from "../useRacksByAisle/useRacksByAisle";
import { useShelvesByRack } from "../useShelvesByRack/useShelvesByRack";
import { useWarehouseZones } from "../useWarehouseZones/useWarehouseZones";

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
