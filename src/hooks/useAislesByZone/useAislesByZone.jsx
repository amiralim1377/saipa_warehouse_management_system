import { getAislesByZone } from "@/services/getAislesByZone";
import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";

export const useAislesByZone = (control) => {
  const selectedZoneId = useWatch({ control, name: "zone" });

  const query = useQuery({
    queryKey: ["aisles", selectedZoneId],
    queryFn: () => getAislesByZone(selectedZoneId),
    enabled: !!selectedZoneId && selectedZoneId !== "all",
  });

  return { selectedZoneId, ...query };
};
