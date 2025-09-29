import { v4 as uuidv4 } from "uuid";

function buildWarehousePayload(data) {
  const zonesArray = Array.from(
    { length: Number(data.zones) || 0 },
    (_, zIndex) => {
      const zoneUuid = uuidv4();
      return {
        temp_uuid: zoneUuid,
        name: `زون ${zIndex + 1}`,
        aisles: Array.from(
          { length: Number(data.aisles) || 0 },
          (_, aIndex) => {
            const aisleUuid = uuidv4();
            return {
              temp_uuid: aisleUuid,
              name: `راهرو ${aIndex + 1}`,
              racks: Array.from(
                { length: Number(data.racks) || 0 },
                (_, rIndex) => {
                  const rackUuid = uuidv4();
                  return {
                    temp_uuid: rackUuid,
                    name: `رک ${rIndex + 1}`,
                    shelves: Array.from(
                      { length: Number(data.shelves) || 0 },
                      (_, sIndex) => ({
                        level: sIndex + 1,
                        name: `طبقه ${sIndex + 1}`,
                      })
                    ),
                  };
                }
              ),
            };
          }
        ),
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
