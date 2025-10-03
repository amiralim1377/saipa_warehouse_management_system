"use client";
import { useMemo } from "react";

export function useWarehouseData(targetWarehouse) {
  // زون‌ها
  const zones = useMemo(() => {
    return targetWarehouse?.zones || [];
  }, [targetWarehouse]);

  // راهروها
  const aisles = useMemo(() => {
    return zones.flatMap((z) => z.aisles || []);
  }, [zones]);

  // رک‌ها
  const racks = useMemo(() => {
    return aisles.flatMap((a) => a.racks || []);
  }, [aisles]);

  // شلف‌ها
  const shelves = useMemo(() => {
    return racks.flatMap((r) =>
      (r.shelves || []).map((s) => ({
        ...s,
        rackId: r.id,
        aisleId: aisles.find((a) => a.racks?.some((rr) => rr.id === r.id))?.id,
        zoneId: zones.find((z) =>
          z.aisles?.some((aa) => aa.racks?.some((rr) => rr.id === r.id))
        )?.id,
        warehouseId: targetWarehouse?.id,
      }))
    );
  }, [racks, aisles, zones, targetWarehouse]);

  return {
    warehouse: targetWarehouse,
    zones,
    aisles,
    racks,
    shelves,
  };
}
