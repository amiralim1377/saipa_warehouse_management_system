// import { supabase } from "@/lib/supabaseClient";

// export const getWarehouse = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("warehouses")
//       .select("*")
//       .order("name", { ascending: true });

//     if (error) throw new Error(error.message);
//     return data;
//   } catch (err) {
//     console.error("Unexpected error:", err);
//     return [];
//   }
// };

"use server";
import prisma from "@/lib/prismaClient";

export const getWarehouse = async () => {
  try {
    const data = await prisma.warehouses.findMany({
      orderBy: {
        name: "asc",
      },
    });

    const safeData = JSON.parse(JSON.stringify(data));

    return safeData;
  } catch (err) {
    console.error("خطا در دریافت انبارها:", err);
    return [];
  }
};
