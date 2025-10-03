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
import { useWarehouse } from "../../context/WarehouseContext";

function ZonesManagement() {
  const { zones } = useWarehouse();

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
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            افزودن زون
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {zones.length === 0 ? (
          <NoZone />
        ) : (
          zones.map((zone) => <ZoneItem key={zone.id} zone={zone} />)
        )}
      </CardContent>
    </Card>
  );
}

export default ZonesManagement;
