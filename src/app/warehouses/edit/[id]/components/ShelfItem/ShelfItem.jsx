import { Trash2, Layers, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const ShelfItem = ({ shelf }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border rounded p-2 text-sm flex items-center justify-between ml-16">
      {/* آیکون + نام طبقه + تاریخ ایجاد */}
      <div className="flex items-center gap-3">
        <Layers className="h-5 w-5 text-primary hidden lg:block" />
        <Input
          readOnly
          value={shelf?.name || ""}
          placeholder="نام طبقه"
          className="h-8 w-32 text-sm font-medium"
          {...register(`shelves.${shelf?.id}.name`)}
        />
        <span className="text-sm hidden lg:flex text-muted-foreground items-center">
          ایجاد شده:{" "}
          {shelf?.created_at
            ? new Date(shelf.created_at).toLocaleDateString("fa-IR")
            : "—"}
        </span>
      </div>

      {/* دکمه‌ها */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
