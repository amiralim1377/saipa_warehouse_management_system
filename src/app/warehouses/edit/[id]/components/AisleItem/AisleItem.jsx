import { useState } from "react";
import { Plus, Trash2, ChevronDown, Columns } from "lucide-react"; // 👈 آیکون راهرو اضافه شد
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

export const AisleItem = () => {
  const [isOpen, setIsOpen] = useState(true);

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
          <Columns className="h-6 w-6 text-primary" />

          <div className="flex-1 grid grid-cols-2 gap-4">
            <Input value="راهرو 1" readOnly className="font-medium" />
            <span className="text-sm text-muted-foreground flex items-center">
              ایجاد شده: 1404/07/11
            </span>
          </div>

          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            افزودن قفسه
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
          <div className="p-4 space-y-4">
            {true ? (
              // حالت پر (نمونه)
              <RackItem />
            ) : (
              // حالت خالی
              <NoRack />
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
