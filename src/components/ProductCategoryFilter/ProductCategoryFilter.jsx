"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useProducts } from "@/app/products/context/ProductsContext";

export default function ProductCategoryFilter() {
  const {
    categories,
    subcategories,
    setSelectedCategory,
    updateRoute,
    selectedSubCategory,
    setSelectedSubCategory,
  } = useProducts();

  const subcategoriesByCategory = subcategories.reduce((acc, sub) => {
    if (!acc[sub.category_id]) acc[sub.category_id] = [];
    acc[sub.category_id].push(sub);
    return acc;
  }, {});

  const handleCategoryChange = (subId) => {
    setSelectedSubCategory(subId);
    updateRoute(null, selectedSubCategory, 1);
  };

  const handleApplyFilter = () => {
    updateRoute(null, selectedSubCategory, 1);
  };

  const handleClearFilter = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    updateRoute(null, null, 1);
  };

  return (
    <aside className="border-l flex flex-col justify-between h-full bg-background text-sm  rounded-lg  border   sticky top-0 p-4 space-y-4 ">
      {categories.map((category) => (
        <Collapsible key={category.id} defaultOpen={false}>
          <CollapsibleTrigger className="flex justify-between items-center w-full p-2 rounded hover:bg-primary">
            <span className="font-bold">{category.name}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 mt-2 space-y-2">
            {subcategoriesByCategory[category.id]?.map((sub) => (
              <div key={sub.id} className="flex items-center gap-2">
                <Checkbox
                  id={sub.id}
                  checked={selectedSubCategory === sub.id}
                  onCheckedChange={() => handleCategoryChange(sub.id)}
                />
                <Label htmlFor={sub.id}>{sub.name}</Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
      <div className="flex flex-col gap-2 mt-4">
        <Button
          className="flex-1 bg-red-500 text-white"
          onClick={handleClearFilter}
        >
          حذف فیلتر
        </Button>

        <Button className="flex-1" onClick={handleApplyFilter}>
          اعمال فیلتر
        </Button>
      </div>
    </aside>
  );
}
