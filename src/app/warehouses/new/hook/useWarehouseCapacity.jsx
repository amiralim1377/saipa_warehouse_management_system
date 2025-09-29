export default function useWarehouseCapacity(watch) {
  const zones = Number(watch("zones")) || 0;
  const aisles = Number(watch("aisles")) || 0;
  const racks = Number(watch("racks")) || 0;
  const shelves = Number(watch("shelves")) || 0;

  const calculateCapacity = (zones, aisles, racks, shelves) => {
    return zones * aisles * racks * shelves;
  };

  const totalCapacity = calculateCapacity(zones, aisles, racks, shelves);

  const isCapacityEqual = () => {
    const enteredCapacity = Number(watch("capacity"));
    const calculatedCapacity = zones * aisles * racks * shelves;

    return enteredCapacity === calculatedCapacity;
  };

  return { totalCapacity, isCapacityEqual };
}
