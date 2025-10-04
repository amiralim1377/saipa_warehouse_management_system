import { useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Plus, Trash2, ChevronDown, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ShelfItem } from "../ShelfItem/ShelfItem";
import NoShelf from "../NoShelf/NoShelf";

export const RackItem = ({
  rack,
  rackIndex,
  aisleIndex,
  zoneIndex,
  removeRack,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { register, control } = useFormContext();

  // مدیریت آرایه‌ی شلف‌ها
  const {
    fields: shelfFields,
    append: addShelf,
    remove: removeShelf,
  } = useFieldArray({
    control,
    name: `zones.${zoneIndex}.aisles.${aisleIndex}.racks.${rackIndex}.shelves`,
  });

  return (
    <Card className="overflow-hidden ml-12">
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

          {/* آیکون قفسه */}
          <Archive className="h-6 w-6 text-primary hidden lg:block" />

          <div className="flex-1 grid grid-cols-2 gap-4">
            <Input
              {...register(
                `zones.${zoneIndex}.aisles.${aisleIndex}.racks.${rackIndex}.name`,
                { required: "نام قفسه الزامی است" }
              )}
              defaultValue={rack?.name || ""}
              className="font-medium"
              placeholder="نام قفسه"
            />
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addShelf({ name: "" })}
          >
            <Plus className="h-4 w-4 mr-1" />
            افزودن طبقه
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => removeRack(rackIndex)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <CollapsibleContent>
          <div className="p-4 space-y-2">
            {shelfFields.length > 0 ? (
              shelfFields.map((shelf, shelfIndex) => (
                <ShelfItem
                  key={shelf.id || shelfIndex}
                  shelf={shelf}
                  shelfIndex={shelfIndex}
                  rackIndex={rackIndex}
                  aisleIndex={aisleIndex}
                  zoneIndex={zoneIndex}
                  removeShelf={removeShelf}
                />
              ))
            ) : (
              <NoShelf />
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
