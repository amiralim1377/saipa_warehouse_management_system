import { Trash2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ShelfItem = () => {
  return (
    <div className="border rounded p-2 text-sm flex items-center justify-between ml-16">
      {/* آیکون + نام طبقه */}
      <div className="flex items-center gap-2">
        <Layers className="h-5 w-5 text-primary" />
        <Input
          value="طبقه 1"
          readOnly
          className="h-8 w-32 text-sm font-medium" // 👈 عرض محدود
        />
      </div>

      {/* دکمه حذف */}
      <Button
        variant="ghost"
        size="icon"
        className="text-destructive hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
