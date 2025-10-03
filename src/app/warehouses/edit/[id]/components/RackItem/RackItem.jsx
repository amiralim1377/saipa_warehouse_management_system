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

export const RackItem = ({ rack }) => {
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
          <Archive className="h-6 w-6 text-primary hidden lg:block" />

          <div className="flex-1 grid grid-cols-2 gap-4">
            <Input
              value={rack?.name || ""}
              readOnly
              className="font-medium"
              placeholder="نام قفسه"
            />
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
            {rack?.shelves?.length > 0 ? (
              rack.shelves.map((shelf) => (
                <ShelfItem key={shelf.id} shelf={shelf} />
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
