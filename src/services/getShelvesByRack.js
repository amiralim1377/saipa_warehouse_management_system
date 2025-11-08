// import { supabase } from "@/lib/supabaseClient";

// export const getShelvesByRack = async (rackId) => {
//   if (!rackId) return [];

//   try {
//     const { data, error } = await supabase
//       .from("shelves")
//       .select("*")
//       .eq("rack_id", rackId)
//       .order("name", { ascending: true });

//     if (error) throw error;

//     return data;
//   } catch (err) {
//     console.error("Failed to fetch shelves:", err);
//     return [];
//   }
// };

// "use server";

// import prisma from "@/lib/prismaClient";

// export const getShelvesByRack = async (rackId) => {
//   if (!rackId) return [];

//   try {
//     const allShelves = await prisma.shelves.findMany({
//       where: { rack_id: rackId },
//       orderBy: { name: "asc" },
//     });

//     const occupiedShelves = await prisma.parts_inventory.findMany({
//       where: { rack_id: rackId, is_deleted: false },
//       select: { shelf_id: true },
//     });

//     const occupiedIds = occupiedShelves.map((s) => s.shelf_id);

//     const emptyShelves = allShelves.filter((s) => !occupiedIds.includes(s.id));

//     return emptyShelves; // همیشه آرایه
//   } catch (err) {
//     console.error("Failed to fetch empty shelves:", err);
//     return [];
//   }
// };

"use server";

import prisma from "@/lib/prismaClient";

export const getShelvesByRack = async (rackId) => {
  if (!rackId) return [];

  try {
    const shelves = await prisma.shelves.findMany({
      where: {
        rack_id: rackId,
      },
      orderBy: {
        name: "asc",
      },
    });

    return shelves;
  } catch (err) {
    console.error("Failed to fetch shelves:", err);
    return [];
  }
};
