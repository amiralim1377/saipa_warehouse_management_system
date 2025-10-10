"use server";
import { supabase } from "@/lib/supabaseClient";

/**
 * آپدیت انبار و ساختار سلسله‌مراتبی آن (زون‌ها، راهروها، رک‌ها، طبقات)
 * @param {Object} warehouse - آبجکت انبار شامل zones → aisles → racks → shelves
 */
export async function updateWarehouseWithStructureServer(warehouse) {
  try {
    // 1️⃣ آپدیت اطلاعات انبار
    if (!warehouse.id) throw new Error("❌ Warehouse ID is missing");

    const { error: warehouseError } = await supabase
      .from("warehouses")
      .update({
        name: warehouse.name,
        location: warehouse.location,
        capacity: warehouse.capacity,
        min_stock: warehouse.min_stock,
      })
      .eq("id", warehouse.id);

    if (warehouseError) throw warehouseError;

    // 2️⃣ آپدیت زون‌ها
    for (const zone of warehouse.zones) {
      if (zone.id) {
        await supabase
          .from("zones")
          .update({ name: zone.name })
          .eq("id", zone.id);
      } else {
        const { data, error } = await supabase
          .from("zones")
          .insert({ warehouse_id: warehouse.id, name: zone.name })
          .select()
          .single();
        if (error) throw error;
        zone.id = data.id;
      }

      // 3️⃣ آپدیت راهروها
      for (const aisle of zone.aisles) {
        if (aisle.id) {
          await supabase
            .from("aisles")
            .update({ name: aisle.name })
            .eq("id", aisle.id);
        } else {
          const { data, error } = await supabase
            .from("aisles")
            .insert({ zone_id: zone.id, name: aisle.name })
            .select()
            .single();
          if (error) throw error;
          aisle.id = data.id;
        }

        // 4️⃣ آپدیت رک‌ها
        for (const rack of aisle.racks) {
          if (rack.id) {
            await supabase
              .from("racks")
              .update({ name: rack.name })
              .eq("id", rack.id);
          } else {
            const { data, error } = await supabase
              .from("racks")
              .insert({ aisle_id: aisle.id, name: rack.name })
              .select()
              .single();
            if (error) throw error;
            rack.id = data.id;
          }

          // 5️⃣ آپدیت طبقات
          for (const shelf of rack.shelves) {
            if (shelf.id) {
              await supabase
                .from("shelves")
                .update({ name: shelf.name, level: shelf.level })
                .eq("id", shelf.id);
            } else {
              const { data, error } = await supabase
                .from("shelves")
                .insert({
                  rack_id: rack.id,
                  name: shelf.name,
                  level: shelf.level,
                })
                .select()
                .single();
              if (error) throw error;
              shelf.id = data.id; // 👈 اضافه شد
            }
          }
        }
      }
    }

    return {
      success: true,
      message: `✅ انبار «${warehouse.name}» با موفقیت آپدیت شد.`,
    };
  } catch (err) {
    console.error("❌ Failed to update warehouse structure:", err);
    return { success: false, message: `❌  ${err.message}خطا در آپدیت انبار` };
  }
}
