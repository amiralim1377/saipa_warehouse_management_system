"use server";
import { supabase } from "@/lib/supabaseClient";

export async function createWarehouseWithStructureServer(warehouse) {
  try {
    // 1️⃣ درج انبار
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
      .select("id")
      .single();

    if (warehouseError) throw warehouseError;
    const warehouseId = warehouseData.id;

    // 2️⃣ درج زون‌ها (bulk)
    const zonesToInsert = warehouse.zones.map((z) => ({
      warehouse_id: warehouseId,
      name: z.name || "زون بدون نام",
    }));

    const { data: zonesData, error: zonesError } = await supabase
      .from("zones")
      .insert(zonesToInsert)
      .select("id");

    if (zonesError) throw zonesError;

    // map برای ارتباط زون‌ها
    const zoneMap = {};
    zonesData.forEach((z, i) => {
      zoneMap[i] = z.id;
    });

    // 3️⃣ آماده‌سازی راهروها
    const aislesToInsert = [];
    warehouse.zones.forEach((zone, i) => {
      zone.aisles.forEach((a) => {
        aislesToInsert.push({
          zone_id: zoneMap[i],
          name: a.name || "راهرو بدون نام",
        });
      });
    });

    // درج راهروها در batch
    const { data: aislesData, error: aislesError } = await supabase
      .from("aisles")
      .insert(aislesToInsert)
      .select("id");

    if (aislesError) throw aislesError;

    // 4️⃣ آماده‌سازی رک‌ها و طبقات
    const racksToInsert = [];
    const shelvesToInsert = [];

    let aisleIndex = 0;
    warehouse.zones.forEach((zone) => {
      zone.aisles.forEach((aisle) => {
        const aisleId = aislesData[aisleIndex++].id;
        aisle.racks.forEach((rack) => {
          racksToInsert.push({
            aisle_id: aisleId,
            name: rack.name || "رک بدون نام",
          });
          // shelves را بعد از درج رک‌ها match می‌کنیم
          shelvesToInsert.push(
            rack.shelves.map((shelf) => ({
              rackIndex: racksToInsert.length - 1, // ایندکس رک
              level: shelf.level || 1,
              name: `طبقه ${shelf.level}`,
            }))
          );
        });
      });
    });

    // 5️⃣ درج رک‌ها (batch)
    const { data: racksData, error: racksError } = await supabase
      .from("racks")
      .insert(racksToInsert)
      .select("id");

    if (racksError) throw racksError;

    // shelves → rack_idها را match کن
    const shelvesFinal = [];
    shelvesToInsert.flat().forEach((s) => {
      shelvesFinal.push({
        rack_id: racksData[s.rackIndex].id,
        level: s.level,
        name: s.name,
      });
    });

    // 6️⃣ درج طبقات (batch)
    // اگر خیلی زیاد بودن، دسته‌بندی کن (مثلاً هر 5000 رکورد یکبار)
    const batchSize = 5000;
    for (let i = 0; i < shelvesFinal.length; i += batchSize) {
      const batch = shelvesFinal.slice(i, i + batchSize);
      const { error: shelvesError } = await supabase
        .from("shelves")
        .insert(batch);
      if (shelvesError) throw shelvesError;
    }

    return warehouseData;
  } catch (err) {
    console.error("Failed to create warehouse structure:", err);
    throw err;
  }
}
