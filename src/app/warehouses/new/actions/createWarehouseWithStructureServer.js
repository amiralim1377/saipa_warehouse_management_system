"use server";
import { supabase } from "@/lib/supabaseClient";

export async function createWarehouseWithStructureServer(warehouse) {
  try {
    // 1️⃣ ایجاد رکورد انبار
    const { data: warehouseData, error: warehouseError } = await supabase
      .from("warehouses")
      .insert([
        {
          name: warehouse.name || `انبار ${Date.now()}`,
          location: warehouse.location || "بدون آدرس",
          capacity: warehouse.capacity || 0,
          min_stock: warehouse.minStock || 0,
        },
      ])
      .select()
      .single();

    if (warehouseError) throw warehouseError;

    const warehouseId = warehouseData.id;

    // 2️⃣ آماده‌سازی bulk insert برای زون‌ها
    const zonesToInsert = warehouse.zones.map((zone) => ({
      warehouse_id: warehouseId,
      name: zone.name || "زون بدون نام",
    }));

    const { data: zonesData, error: zonesError } = await supabase
      .from("zones")
      .insert(zonesToInsert)
      .select();

    if (zonesError) throw zonesError;

    // 3️⃣ آماده‌سازی bulk insert برای راهروها و رک‌ها و طبقات
    const aislesToInsert = [];
    const racksToInsert = [];
    const shelvesToInsert = [];

    zonesData.forEach((zone, zIndex) => {
      const zonePayload = warehouse.zones[zIndex];
      zonePayload.aisles.forEach((aisle, aIndex) => {
        aislesToInsert.push({
          zone_id: zone.id,
          name: aisle.name || "راهرو بدون نام",
        });
      });
    });

    const { data: aislesData, error: aislesError } = await supabase
      .from("aisles")
      .insert(aislesToInsert)
      .select();

    if (aislesError) throw aislesError;

    // اکنون رک‌ها و طبقات را بر اساس aislesData آماده می‌کنیم
    aislesData.forEach((aisleRow, index) => {
      // پیدا کردن aisles اصلی از payload
      let aislePayload;
      let currentIndex = 0;
      outer: for (const zone of warehouse.zones) {
        for (const a of zone.aisles) {
          if (currentIndex === index) {
            aislePayload = a;
            break outer;
          }
          currentIndex++;
        }
      }

      aislePayload.racks.forEach((rack) => {
        racksToInsert.push({
          aisle_id: aisleRow.id,
          name: rack.name || "رک بدون نام",
          shelves: rack.shelves.map((shelf) => ({
            level: shelf.level || 1,
            name: `طبقه ${shelf.level}`,
          })),
        });
      });
    });

    // bulk insert رک‌ها
    const racksInsertData = racksToInsert.map((r) => ({
      aisle_id: r.aisle_id,
      name: r.name,
    }));

    const { data: racksData, error: racksError } = await supabase
      .from("racks")
      .insert(racksInsertData)
      .select();

    if (racksError) throw racksError;

    // bulk insert طبقات
    const shelvesInsertData = [];
    racksData.forEach((rackRow, index) => {
      const rackPayload = racksToInsert[index];
      rackPayload.shelves.forEach((shelf) => {
        shelvesInsertData.push({
          rack_id: rackRow.id,
          level: shelf.level,
          name: shelf.name,
        });
      });
    });

    const { error: shelvesError } = await supabase
      .from("shelves")
      .insert(shelvesInsertData);

    if (shelvesError) throw shelvesError;

    return warehouseData;
  } catch (err) {
    console.error("Failed to create warehouse structure:", err);
    throw err;
  }
}
