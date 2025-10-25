// "use server";

// import { supabase } from "@/lib/supabaseClient";

// export async function fetchProducts() {
//   try {
//     const { data, error } = await supabase
//       .from("v_parts_inventory")
//       .select("*")
//       .order("entry_date", { ascending: false });

//     if (error) throw new Error(error.message);

//     return { data, status: "success" };
//   } catch (err) {
//     console.error("❌ Failed to fetch products:", err);
//     return { data: [], status: "error", message: err.message };
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";

export async function fetchProducts() {
  try {
    const data = await prisma.$queryRaw`
      SELECT *
      FROM v_parts_inventory
      ORDER BY entry_date DESC
    `;

    // console.log(data);
    const normalizedData = data.map((item) => ({
      ...item,
      unit_price: item.unit_price ? Number(item.unit_price) : 0,
      total_value: item.total_value ? Number(item.total_value) : 0,
      stock: item.stock ? Number(item.stock) : 0,
      min_stock: item.min_stock ? Number(item.min_stock) : 0,
    }));

    return { data: normalizedData, status: "success" };
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);
    return { data: [], status: "error", message: err.message };
  }
}

// okay
