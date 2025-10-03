import { useState } from "react";
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

export const ZoneItem = ({ zone }) => {
  const [isOpen, setIsOpen] = useState(true);

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
                value={zone?.name || ""}
                placeholder="نام زون"
                className="font-medium"
                readOnly
              />
            </div>
            <div className="items-center hidden lg:flex gap-2 text-sm text-muted-foreground">
              <span>ایجاد شده:</span>
              <span>
                {zone?.created_at
                  ? new Date(zone.created_at).toLocaleDateString("fa-IR")
                  : "—"}
              </span>
            </div>
          </div>

          <Button variant="outline">
            <Plus className="h-2 w-2 mr-1" />
            افزودن راهرو
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <CollapsibleContent>
          <div className="p-6 space-y-4">
            {zone?.aisles?.length > 0 ? (
              zone.aisles.map((aisle) => (
                <AisleItem key={aisle.id} aisle={aisle} />
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
