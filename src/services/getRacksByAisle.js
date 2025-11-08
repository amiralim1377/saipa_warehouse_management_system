// import { supabase } from "@/lib/supabaseClient";

// export const getRacksByAisle = async (aisleId) => {
//   if (!aisleId) return [];

//   try {
//     const { data, error } = await supabase
//       .from("racks")
//       .select("*")
//       .eq("aisle_id", aisleId)
//       .order("name", { ascending: true });

//     if (error) throw error;
//     return data;
//   } catch (err) {
//     console.error("Failed to fetch racks:", err);
//     return [];
//   }
// };

"use server";

import prisma from "@/lib/prismaClient";

export const getRacksByAisle = async (aisleId) => {
  if (!aisleId) return [];

  try {
    const racks = await prisma.racks.findMany({
      where: { aisle_id: aisleId },
      orderBy: { name: "asc" },
    });

    return racks;
  } catch (err) {
    console.error("❌ Failed to fetch racks:", err);
    return [];
  }
};
