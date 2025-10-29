function calculateWarehouseCapacity(zones) {
  if (!zones || zones.length === 0) return 0;

  let totalCapacity = 0;

  for (const zone of zones) {
    const aisles = zone.aisles || [];
    for (const aisle of aisles) {
      const racks = aisle.racks || [];
      for (const rack of racks) {
        const shelves = rack.shelves || [];
        // ظرفیت این رک = تعداد طبقات
        const rackCapacity = shelves.length;
        // جمع کل انبار = ضرب رک در تعداد رک‌ها در این راهرو × راهرو × زون
        totalCapacity += rackCapacity;
      }
    }
  }

  // حالا ضرب با تعداد رک‌ها و راهروها و زون‌ها به شکل ساده انجام شد
  return totalCapacity;
}

export default calculateWarehouseCapacity;
