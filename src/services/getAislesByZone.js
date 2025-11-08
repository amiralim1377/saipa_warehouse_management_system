// import { supabase } from "@/lib/supabaseClient";

// export const getAislesByZone = async (zoneId) => {
//   if (!zoneId) return [];

//   try {
//     const { data, error } = await supabase
//       .from("aisles")
//       .select("*")
//       .eq("zone_id", zoneId)
//       .order("name", { ascending: true });

//     if (error) throw error;
//     return data;
//   } catch (err) {
//     console.error("Failed to fetch aisles:", err);
//     return [];
//   }
// };

"use server";

import prisma from "@/lib/prismaClient";

export const getAislesByZone = async (zoneId) => {
  if (!zoneId) return [];

  try {
    const aisles = await prisma.aisles.findMany({
      where: { zone_id: zoneId },
      orderBy: { name: "asc" },
    });

    return aisles;
  } catch (err) {
    console.error("❌ Failed to fetch aisles:", err);
    return [];
  }
};
