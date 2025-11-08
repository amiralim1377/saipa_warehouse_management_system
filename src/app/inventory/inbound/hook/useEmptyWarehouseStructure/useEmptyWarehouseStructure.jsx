import { useEmptyWarehouseZones } from "@/hooks/useEmptyWarehouseZones/useEmptyWarehouseZones";
import { useEmptyAislesByZone } from "@/hooks/useEmptyAislesByZone/useEmptyAislesByZone";
import { useEmptyRacksByAisle } from "@/hooks/useEmptyRacksByAisle/useEmptyRacksByAisle";
import { useEmptyShelvesByRack } from "@/hooks/useEmptyShelvesByRack/useEmptyShelvesByRack";

export function useEmptyWarehouseStructure(control) {
  const { zones, zonesLoading } = useEmptyWarehouseZones({ control });

  const {
    selectedZoneId,
    aisles,
    isLoading: aislesLoading,
  } = useEmptyAislesByZone(control);

  const { racks, isLoading: racksLoading } = useEmptyRacksByAisle(control);

  const { shelves, isLoading: shelvesLoading } = useEmptyShelvesByRack(control);

  return {
    zones,
    aisles,
    racks,
    shelves,

    zonesLoading,
    aislesLoading,
    racksLoading,
    shelvesLoading,

    selectedZoneId,
  };
}
