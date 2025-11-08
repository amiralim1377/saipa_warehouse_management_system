"use server";

import prisma from "@/lib/prismaClient";

export const getEmptyShelvesByRack = async (rackId) => {
  if (!rackId) return [];

  try {
    // Fetch all shelves in the given rack
    const allShelves = await prisma.shelves.findMany({
      where: { rack_id: rackId },
      orderBy: { name: "asc" },
    });

    // Fetch all occupied shelves (ignore shelf_id null in JS instead of Prisma)
    const occupiedShelvesRaw = await prisma.parts_inventory.findMany({
      where: {
        rack_id: rackId,
        is_deleted: false,
      },
      select: { shelf_id: true },
    });

    // Filter out null shelf_id in JS
    const occupiedShelves = occupiedShelvesRaw.filter(
      (s) => s.shelf_id !== null
    );

    // Extract occupied IDs
    const occupiedIds = occupiedShelves.map((s) => s.shelf_id);

    // Filter empty shelves
    const emptyShelves = allShelves.filter((s) => !occupiedIds.includes(s.id));

    return emptyShelves;
  } catch (err) {
    console.error("❌ Failed to fetch empty shelves:", err);
    return [];
  }
};
