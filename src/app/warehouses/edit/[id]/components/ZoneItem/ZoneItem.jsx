import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Plus, Trash2, ChevronDown, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AisleItem } from "../AisleItem/AisleItem";
import NoAisle from "../NoAisle/NoAisle";

export const ZoneItem = ({ zone, zoneIndex, removeZone }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { register, control } = useFormContext();

  // مدیریت آرایه‌ی راهروها
  const {
    fields: aisleFields,
    append: addAisle,
    remove: removeAisle,
  } = useFieldArray({
    control,
    name: `zones.${zoneIndex}.aisles`,
  });

  return (
    <Card className="overflow-hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Header */}
        <div className="flex items-center gap-4 p-5 bg-accent/5 border-b">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  isOpen ? "" : "-rotate-90"
                }`}
              />
            </Button>
          </CollapsibleTrigger>

          {/* آیکون زون */}
          <Grid3x3 className="h-6 w-6 text-primary hidden lg:block" />

          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Input
                {...register(`zones.${zoneIndex}.name`, {
                  required: "نام زون الزامی است",
                })}
                defaultValue={zone?.name || ""}
                placeholder="نام زون"
                className="font-medium"
              />
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => addAisle({ name: "", racks: [] })}
          >
            <Plus className="h-2 w-2 mr-1" />
            افزودن راهرو
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeZone(zoneIndex)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <CollapsibleContent>
          <div className="p-6 space-y-4">
            {aisleFields.length > 0 ? (
              aisleFields.map((aisle, aisleIndex) => (
                <AisleItem
                  key={aisle.id || aisleIndex}
                  aisle={aisle}
                  aisleIndex={aisleIndex}
                  zoneIndex={zoneIndex}
                  removeAisle={removeAisle}
                />
              ))
            ) : (
              <NoAisle />
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
