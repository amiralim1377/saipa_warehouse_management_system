// import { supabase } from "@/lib/supabaseClient";

// export const getZonesByWarehouse = async (warehouseId) => {
//   try {
//     const { data, error } = await supabase
//       .from("zones")
//       .select("*")
//       .eq("warehouse_id", warehouseId)
//       .order("name", { ascending: true });

//     if (error) throw new Error(error.message);
//     return data;
//   } catch (err) {
//     console.error("Error fetching zones:", err);
//     return [];
//   }
// };

"use server";

import prisma from "@/lib/prismaClient";

export const getZonesByWarehouse = async (warehouseId) => {
  if (!warehouseId) return [];

  try {
    const zones = await prisma.zones.findMany({
      where: { warehouse_id: warehouseId },
      orderBy: { name: "asc" },
    });

    return zones;
  } catch (err) {
    console.error("❌ Failed to fetch zones:", err);
    return [];
  }
};
