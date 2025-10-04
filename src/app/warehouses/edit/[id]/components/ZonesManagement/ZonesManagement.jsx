import { useFormContext, useFieldArray } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import NoZone from "../NoZone/NoZone";
import { ZoneItem } from "../ZoneItem/ZoneItem";

function ZonesManagement() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "zones",
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>مدیریت زون‌ها</CardTitle>
            <CardDescription>
              سازمان‌دهی ساختار انبار با استفاده از زون‌ها، راهروها، قفسه‌ها و
              طبقات
            </CardDescription>
          </div>
          <Button
            type="button"
            onClick={() => append({ name: "", aisles: [] })}
          >
            <Plus className="h-4 w-4 mr-2" />
            افزودن زون
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {fields.length === 0 ? (
          <NoZone />
        ) : (
          fields.map((zone, index) => (
            <ZoneItem
              key={zone.id || index}
              zone={zone}
              zoneIndex={index}
              removeZone={remove}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default ZonesManagement;
