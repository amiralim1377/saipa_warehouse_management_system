"use client";

import { useEmptyAislesByZone } from "../useEmptyAislesByZone/useEmptyAislesByZone";
import { useEmptyRacksByAisle } from "../useEmptyRacksByAisle/useEmptyRacksByAisle";
import { useEmptyShelvesByRack } from "../useEmptyShelvesByRack/useEmptyShelvesByRack";
import { useEmptyWarehouseZones } from "../useEmptyWarehouseZones/useEmptyWarehouseZones";

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
