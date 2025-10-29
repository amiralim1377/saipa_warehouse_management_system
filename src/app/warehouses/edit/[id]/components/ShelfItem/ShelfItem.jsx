import { Trash2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export const ShelfItem = ({
  shelf,
  shelfIndex,
  rackIndex,
  aisleIndex,
  zoneIndex,
  removeShelf,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border rounded p-2 text-sm flex items-center justify-between ml-16">
      {/* آیکون + نام طبقه */}
      <div className="flex items-center gap-3">
        <Layers className="h-5 w-5 text-primary hidden lg:block" />
        <Input
          {...register(
            `zones.${zoneIndex}.aisles.${aisleIndex}.racks.${rackIndex}.shelves.${shelfIndex}.name`,
            { required: "نام طبقه الزامی است" }
          )}
          defaultValue={shelf?.name || ""}
          placeholder="نام طبقه"
          className="h-8 w-32 text-sm font-medium"
        />
        {errors?.zones?.[zoneIndex]?.aisles?.[aisleIndex]?.racks?.[rackIndex]
          ?.shelves?.[shelfIndex]?.name && (
          <p className="text-destructive text-xs">
            {
              errors.zones[zoneIndex].aisles[aisleIndex].racks[rackIndex]
                .shelves[shelfIndex].name.message
            }
          </p>
        )}

        {/* شماره طبقه (level) */}
        <Input
          type="number"
          {...register(
            `zones.${zoneIndex}.aisles.${aisleIndex}.racks.${rackIndex}.shelves.${shelfIndex}.level`,
            {
              min: { value: 1, message: "شماره طبقه باید مثبت باشد" },
            }
          )}
          defaultValue={shelf?.level || ""}
          placeholder="شماره طبقه"
          className="h-8 w-28 text-sm font-medium"
          min={1}
        />
      </div>

      {/* دکمه حذف */}
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => removeShelf(shelfIndex)}
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
