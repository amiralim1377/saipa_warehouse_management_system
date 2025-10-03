import { useState } from "react";
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

export const RackItem = () => {
  const [isOpen, setIsOpen] = useState(true);

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
          <Archive className="h-6 w-6 text-primary" />

          <div className="flex-1 grid grid-cols-2 gap-4">
            <Input value="قفسه 1" readOnly className="font-medium" />
            <span className="text-sm text-muted-foreground flex items-center">
              ایجاد شده: 1404/07/11
            </span>
          </div>

          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-1" />
            افزودن طبقه
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
          <div className="p-4 space-y-2">
            {true ? (
              // حالت پر (نمونه)
              <ShelfItem />
            ) : (
              // حالت خالی
              <NoShelf />
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
