"use server";

import prisma from "@/lib/prismaClient";

export const getEmptyAislesByZone = async (zoneId) => {
  if (!zoneId) return [];

  try {
    // 1️⃣ Fetch all aisles in the zone
    const allAisles = await prisma.aisles.findMany({
      where: { zone_id: zoneId },
      orderBy: { name: "asc" },
    });

    const aisleIds = allAisles.map((a) => a.id);

    // 2️⃣ Fetch all racks in these aisles
    const allRacks = await prisma.racks.findMany({
      where: { aisle_id: { in: aisleIds } },
      select: { id: true, aisle_id: true },
    });

    const rackIds = allRacks.map((r) => r.id);

    // 3️⃣ Fetch all shelves in these racks
    const allShelves = await prisma.shelves.findMany({
      where: { rack_id: { in: rackIds } },
      select: { id: true, rack_id: true },
    });

    // 4️⃣ Fetch occupied shelves
    const occupiedShelvesRaw = await prisma.parts_inventory.findMany({
      where: {
        shelf_id: { in: allShelves.map((s) => s.id) },
        is_deleted: false,
      },
      select: { shelf_id: true },
    });
    const occupiedIds = new Set(occupiedShelvesRaw.map((s) => s.shelf_id));

    // 5️⃣ Determine racks that have at least one empty shelf
    const racksWithEmptyShelves = allRacks.filter((rack) =>
      allShelves.some((s) => s.rack_id === rack.id && !occupiedIds.has(s.id))
    );
    const racksWithEmptyIds = new Set(racksWithEmptyShelves.map((r) => r.id));

    // 6️⃣ Determine aisles that have at least one rack with empty shelf
    const emptyAisles = allAisles.filter((a) =>
      racksWithEmptyShelves.some((r) => r.aisle_id === a.id)
    );

    return emptyAisles;
  } catch (err) {
    console.error("❌ Failed to fetch empty aisles:", err);
    return [];
  }
};
