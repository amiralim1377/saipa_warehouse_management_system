import { getSubcategories } from "@/services/getSubcategory";
import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";

export const useSubcategories = (control) => {
  const selectedCategoryId = useWatch({ control, name: "category" });

  const query = useQuery({
    queryKey: ["subcategories", selectedCategoryId],
    queryFn: () => getSubcategories(selectedCategoryId),
    enabled: !!selectedCategoryId && selectedCategoryId !== "all",
  });

  return { selectedCategoryId, ...query };
};
