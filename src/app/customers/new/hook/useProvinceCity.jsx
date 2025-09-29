import { useWatch } from "react-hook-form";
import { useMemo } from "react";

export function useProvinceCity({ control, provinces }) {
  const selectedProvince = useWatch({
    control,
    name: "province",
  });

  const cities = useMemo(() => {
    return provinces.find((p) => p.name === selectedProvince)?.cities || [];
  }, [selectedProvince, provinces]);

  return { selectedProvince, cities };
}
