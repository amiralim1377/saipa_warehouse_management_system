import { useQuery } from "@tanstack/react-query";
import { useWatch } from "react-hook-form";
import { getSubcategories } from "../services/getSubcategory";

export const useSubcategories = (control) => {
  const selectedCategoryId = useWatch({ control, name: "category" });

  const query = useQuery({
    queryKey: ["subcategories", selectedCategoryId],
    queryFn: () => getSubcategories(selectedCategoryId),
    enabled: !!selectedCategoryId,
  });

  return { selectedCategoryId, ...query };
};
