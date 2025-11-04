"use server";
import { supabase } from "@/lib/supabaseClient";

export async function createWarehouseWithStructureServer(warehouse) {
  try {
    const payload = {
      p_name: warehouse.name || `انبار ${Date.now()}`,
      p_location: warehouse.location || "بدون آدرس",
      p_capacity: Math.max(0, parseInt(warehouse.capacity, 10) || 0),
      p_min_stock: parseInt(warehouse.minStock, 10) || 0,
      p_zones: parseInt(warehouse.zones, 10) || 1,
      p_aisles: parseInt(warehouse.aisles, 10) || 1,
      p_racks: parseInt(warehouse.racks, 10) || 1,
      p_shelves: parseInt(warehouse.shelves, 10) || 1,
    };

    const { data, error } = await supabase.rpc(
      "create_warehouse_auto",
      payload
    );

    if (error) {
      console.error("❌ Supabase RPC error:", error);
      throw error;
    }

    return data;
  } catch (err) {
    console.error("🚨 Failed to create warehouse structure:", err);
    throw err;
  }
}

// "use server";
// import prisma from "@/lib/prismaClient";

// export async function createWarehouseWithStructureServer(warehouse) {
//   console.log("📦 ورودی تابع:", warehouse);

//   try {
//     const payload = {
//       name: warehouse.name || `انبار ${Date.now()}`,
//       location: warehouse.location || "بدون آدرس",
//       capacity: parseInt(warehouse.capacity, 10) || 0,
//       min_stock: parseInt(warehouse.minStock, 10) || 0,
//       zones: parseInt(warehouse.zones, 10) || 1,
//       aisles: parseInt(warehouse.aisles, 10) || 1,
//       racks: parseInt(warehouse.racks, 10) || 1,
//       shelves: parseInt(warehouse.shelves, 10) || 1,
//     };

//     const newWarehouse = await prisma.warehouses.create({
//       data: payload,
//     });

//     console.log("✅ انبار با موفقیت ساخته شد. ID:", newWarehouse.id);
//     return newWarehouse.id;
//   } catch (err) {
//     console.error("🚨 Failed to create warehouse structure:", err);
//     throw err;
//   }
// }
