function calculateWarehouseCapacity(zones) {
  if (!zones || zones.length === 0) return 0;

  let totalCapacity = 0;

  for (const zone of zones) {
    const aisles = zone.aisles || [];
    for (const aisle of aisles) {
      const racks = aisle.racks || [];
      for (const rack of racks) {
        const shelves = rack.shelves || [];
        const rackCapacity = shelves.length;
        totalCapacity += rackCapacity;
      }
    }
  }

  return totalCapacity;
}

export default calculateWarehouseCapacity;
