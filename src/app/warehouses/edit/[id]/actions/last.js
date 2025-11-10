"use server";
import { supabase } from "@/lib/supabaseClient";

/**
 * Update warehouse and its hierarchical structure (zones, aisles, racks, shelves)
 * Includes logic to delete removed records at each level
 */
export async function updateWarehouseWithStructureServer(warehouse) {
  try {
    if (!warehouse?.id) throw new Error("❌ Warehouse ID not found");

    // 1️⃣ Update warehouse information
    // ⚠️ Only update actual columns of the warehouses table
    const { error: warehouseError } = await supabase
      .from("warehouses")
      .update({
        name: warehouse.name,
        location: warehouse.location,
        capacity: warehouse.capacity,
        min_stock: warehouse.min_stock,
        updated_at: new Date().toISOString(),
      })
      .eq("id", warehouse.id);

    if (warehouseError) throw warehouseError;

    // 📌 Helper function to delete removed records and handle update/insert
    async function syncLevel({
      table,
      parentField,
      parentId,
      newItems,
      subSync,
      hasLevel = false, // If the entity has a "level" field (like shelves)
    }) {
      const { data: existing, error: fetchError } = await supabase
        .from(table)
        .select("id")
        .eq(parentField, parentId);

      if (fetchError) throw fetchError;

      const newIds = (newItems || []).filter((i) => i.id).map((i) => i.id);
      const toDelete = existing.filter((e) => !newIds.includes(e.id));

      if (toDelete.length > 0) {
        const { error: deleteError } = await supabase
          .from(table)
          .delete()
          .in(
            "id",
            toDelete.map((e) => e.id)
          );
        if (deleteError) throw deleteError;
      }

      for (const item of newItems || []) {
        let itemId = item.id;
        const payload = hasLevel
          ? { name: item.name, level: item.level } // For shelves
          : { name: item.name }; // For other tables

        if (itemId) {
          const { error } = await supabase
            .from(table)
            .update(payload)
            .eq("id", itemId);
          if (error) throw error;
        } else {
          const { data, error } = await supabase
            .from(table)
            .insert({ [parentField]: parentId, ...payload })
            .select()
            .single();
          if (error) throw error;
          itemId = data.id;
        }

        if (subSync) await subSync(item, itemId);
      }
    }

    // 2️⃣ Zones → Aisles → Racks → Shelves
    await syncLevel({
      table: "zones",
      parentField: "warehouse_id",
      parentId: warehouse.id,
      newItems: warehouse.zones,
      subSync: async (zone, zoneId) => {
        await syncLevel({
          table: "aisles",
          parentField: "zone_id",
          parentId: zoneId,
          newItems: zone.aisles,
          subSync: async (aisle, aisleId) => {
            await syncLevel({
              table: "racks",
              parentField: "aisle_id",
              parentId: aisleId,
              newItems: aisle.racks,
              subSync: async (rack, rackId) => {
                await syncLevel({
                  table: "shelves",
                  parentField: "rack_id",
                  parentId: rackId,
                  newItems: rack.shelves,
                  hasLevel: true, // Handle "level" for shelves
                });
              },
            });
          },
        });
      },
    });

    return {
      success: true,
      message: `✅ انبار «${warehouse.name}» با موفقیت آپدیت شد.`,
    };
  } catch (err) {
    console.error("❌ Failed to update warehouse structure:", err);
    return {
      success: false,
      message: `❌ خطا در آپدیت انبار: ${err.message}`,
    };
  }
}
