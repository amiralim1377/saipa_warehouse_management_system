"use server";

import prisma from "@/lib/prismaClient";

export const getEmptyZonesByWarehouse = async (warehouseId) => {
  if (!warehouseId) return [];

  try {
    // 1️⃣ Fetch all zones in the warehouse
    const allZones = await prisma.zones.findMany({
      where: { warehouse_id: warehouseId },
      orderBy: { name: "asc" },
    });

    const zoneIds = allZones.map((z) => z.id);

    // 2️⃣ Fetch all aisles in these zones
    const allAisles = await prisma.aisles.findMany({
      where: { zone_id: { in: zoneIds } },
      select: { id: true, zone_id: true },
    });

    const aisleIds = allAisles.map((a) => a.id);

    // 3️⃣ Fetch all racks in these aisles
    const allRacks = await prisma.racks.findMany({
      where: { aisle_id: { in: aisleIds } },
      select: { id: true, aisle_id: true },
    });

    const rackIds = allRacks.map((r) => r.id);

    // 4️⃣ Fetch all shelves in these racks
    const allShelves = await prisma.shelves.findMany({
      where: { rack_id: { in: rackIds } },
      select: { id: true, rack_id: true },
    });

    // 5️⃣ Fetch occupied shelves
    const occupiedShelvesRaw = await prisma.parts_inventory.findMany({
      where: {
        shelf_id: { in: allShelves.map((s) => s.id) },
        is_deleted: false,
      },
      select: { shelf_id: true },
    });
    const occupiedIds = new Set(occupiedShelvesRaw.map((s) => s.shelf_id));

    // 6️⃣ Determine racks that have at least one empty shelf
    const racksWithEmptyShelves = allRacks.filter((rack) =>
      allShelves.some((s) => s.rack_id === rack.id && !occupiedIds.has(s.id))
    );
    const racksWithEmptyIds = new Set(racksWithEmptyShelves.map((r) => r.id));

    // 7️⃣ Determine aisles that have at least one rack with empty shelf
    const aislesWithEmptyRacks = allAisles.filter((a) =>
      racksWithEmptyShelves.some((r) => r.aisle_id === a.id)
    );
    const aisleIdsWithEmpty = new Set(aislesWithEmptyRacks.map((a) => a.id));

    // 8️⃣ Determine zones that have at least one aisle with empty racks
    const emptyZones = allZones.filter((z) =>
      aislesWithEmptyRacks.some((a) => a.zone_id === z.id)
    );

    return emptyZones;
  } catch (err) {
    console.error("❌ Failed to fetch empty zones:", err);
    return [];
  }
};
