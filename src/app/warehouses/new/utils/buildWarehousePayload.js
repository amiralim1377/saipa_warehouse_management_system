function buildWarehousePayload(data) {
  const zonesArray = Array.from(
    { length: Number(data.zones) || 0 },
    (_, zIndex) => {
      const aislesArray = Array.from(
        { length: Number(data.aisles) || 0 },
        (_, aIndex) => {
          const racksArray = Array.from(
            { length: Number(data.racks) || 0 },
            (_, rIndex) => {
              const shelvesArray = Array.from(
                { length: Number(data.shelves) || 0 },
                (_, sIndex) => ({
                  level: sIndex + 1,
                })
              );
              return {
                name: `رک ${rIndex + 1}`,
                shelves: shelvesArray,
              };
            }
          );
          return {
            name: `راهرو ${aIndex + 1}`,
            racks: racksArray,
          };
        }
      );
      return {
        name: `زون ${zIndex + 1}`,
        aisles: aislesArray,
      };
    }
  );

  return {
    name: data.name || `انبار ${Date.now()}`,
    location: data.location || "بدون آدرس",
    capacity: Number(data.capacity) || 0,
    minStock: Number(data.minStock) || 0,
    zones: zonesArray,
  };
}

export default buildWarehousePayload;
