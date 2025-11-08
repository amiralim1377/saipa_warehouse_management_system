"use server";

import prisma from "@/lib/prismaClient";

export const getEmptyRacksByAisle = async (aisleId) => {
  if (!aisleId) return [];

  try {
    // 1️⃣ Fetch all racks in the aisle
    const allRacks = await prisma.racks.findMany({
      where: { aisle_id: aisleId },
      orderBy: { name: "asc" },
    });

    const rackIds = allRacks.map((r) => r.id);

    // 2️⃣ Fetch all shelves in these racks
    const allShelves = await prisma.shelves.findMany({
      where: { rack_id: { in: rackIds } },
      select: { id: true, rack_id: true },
    });

    // 3️⃣ Fetch all occupied shelves
    const occupiedShelvesRaw = await prisma.parts_inventory.findMany({
      where: {
        shelf_id: { in: allShelves.map((s) => s.id) },
        is_deleted: false,
      },
      select: { shelf_id: true },
    });

    const occupiedShelves = occupiedShelvesRaw.filter(
      (s) => s.shelf_id !== null
    );
    const occupiedIds = new Set(occupiedShelves.map((s) => s.shelf_id));

    // 4️⃣ Determine empty racks
    const emptyRacks = allRacks.filter((rack) => {
      const shelvesInRack = allShelves.filter((s) => s.rack_id === rack.id);
      return shelvesInRack.some((s) => !occupiedIds.has(s.id));
    });

    return emptyRacks;
  } catch (err) {
    console.error("❌ Failed to fetch empty racks:", err);
    return [];
  }
};
