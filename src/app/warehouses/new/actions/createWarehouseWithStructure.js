import { supabase } from "@/lib/supabaseClient";

const createWarehouseWithStructure = async (warehouse) => {
  try {
    // 1️⃣ ایجاد رکورد انبار
    const { data: warehouseData, error: warehouseError } = await supabase
      .from("warehouses")
      .insert([
        {
          name: warehouse.name,
          location: warehouse.location,
          capacity: warehouse.capacity,
          min_stock: warehouse.minStock,
        },
      ])
      .select()
      .single();

    if (warehouseError) throw warehouseError;
    const warehouseId = warehouseData.id;

    // 2️⃣ آماده کردن داده‌های زون‌ها
    const zonesToInsert = warehouse.zones.map((zone) => ({
      warehouse_id: warehouseId,
      name: zone.name || "زون بدون نام",
    }));

    const { data: zonesData, error: zonesError } = await supabase
      .from("zones")
      .insert(zonesToInsert)
      .select();

    if (zonesError) throw zonesError;

    // 3️⃣ آماده کردن داده‌های راهروها
    const aislesToInsert = [];
    const zoneIdMap = zonesData.map((zone, index) => ({
      zone,
      aisles: warehouse.zones[index].aisles,
    }));

    zoneIdMap.forEach(({ zone, aisles }) => {
      aisles.forEach((aisle) => {
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

    // 4️⃣ آماده کردن داده‌های رک‌ها
    const racksToInsert = [];
    let aisleIndex = 0;
    zoneIdMap.forEach(({ aisles }) => {
      aisles.forEach((aisle) => {
        const aisleId = aislesData[aisleIndex].id;
        aisle.racks.forEach((rack) => {
          racksToInsert.push({
            aisle_id: aisleId,
            name: rack.name || "رک بدون نام",
          });
        });
        aisleIndex++;
      });
    });

    const { data: racksData, error: racksError } = await supabase
      .from("racks")
      .insert(racksToInsert)
      .select();

    if (racksError) throw racksError;

    // 5️⃣ آماده کردن داده‌های طبقه‌ها
    const shelvesToInsert = [];
    let rackIndex = 0;
    zoneIdMap.forEach(({ aisles }) => {
      aisles.forEach((aisle) => {
        aisle.racks.forEach((rack) => {
          const rackId = racksData[rackIndex].id;
          rack.shelves.forEach((shelf) => {
            shelvesToInsert.push({
              rack_id: rackId,
              level: shelf.level || 1,
              name: `طبقه ${shelf.level || 1}`,
            });
          });
          rackIndex++;
        });
      });
    });

    const { error: shelvesError } = await supabase
      .from("shelves")
      .insert(shelvesToInsert);

    if (shelvesError) throw shelvesError;

    return warehouseData;
  } catch (err) {
    console.error("Failed to create warehouse structure:", err);
    throw err;
  }
};

export default createWarehouseWithStructure;
