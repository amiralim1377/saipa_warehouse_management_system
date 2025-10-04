import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Plus, Trash2, ChevronDown, Columns } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RackItem } from "../RackItem/RackItem";
import NoRack from "../NoRack/NoRack";

export const AisleItem = ({ aisle, aisleIndex, zoneIndex, removeAisle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { register, control } = useFormContext();

  // مدیریت آرایه‌ی رک‌ها
  const {
    fields: rackFields,
    append: addRack,
    remove: removeRack,
  } = useFieldArray({
    control,
    name: `zones.${zoneIndex}.aisles.${aisleIndex}.racks`,
  });

  return (
    <Card className="overflow-hidden ml-6">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Header */}
        <div className="flex items-center gap-4 p-4 bg-accent/5 border-b">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  isOpen ? "" : "-rotate-90"
                }`}
              />
            </Button>
          </CollapsibleTrigger>

          {/* آیکون راهرو */}
          <Columns className="h-6 w-6 text-primary hidden lg:block" />

          <div className="flex-1 grid grid-cols-2 gap-4">
            <Input
              {...register(`zones.${zoneIndex}.aisles.${aisleIndex}.name`, {
                required: "نام راهرو الزامی است",
              })}
              defaultValue={aisle?.name || ""}
              className="font-medium"
              placeholder="نام راهرو"
            />
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => addRack({ name: "", shelves: [] })}
          >
            <Plus className="h-4 w-4 mr-2" />
            افزودن قفسه
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeAisle(aisleIndex)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <CollapsibleContent>
          <div className="p-4 space-y-4">
            {rackFields.length > 0 ? (
              rackFields.map((rack, rackIndex) => (
                <RackItem
                  key={rack.id || rackIndex}
                  rack={rack}
                  rackIndex={rackIndex}
                  aisleIndex={aisleIndex}
                  zoneIndex={zoneIndex}
                  removeRack={removeRack}
                />
              ))
            ) : (
              <NoRack />
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
